(function () {
    "use strict";

    var CARD_LABELS = [
        "Formal invitation",
        "Wedding details"
    ];

    var root = document.documentElement;

    var $ = function (selector, context) {
        return (context || document).querySelector(selector);
    };

    var wait = function (milliseconds) {
        return new Promise(function (resolve) {
            window.setTimeout(resolve, milliseconds);
        });
    };

    var clamp = function (number, minimum, maximum) {
        return Math.max(minimum, Math.min(maximum, number));
    };

    var reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    var app = $("#app");
    var envelope = $("#envelope");
    var openTarget = $("#openInvite");
    var note = $("#envNote");
    var frontGuestLine = $("#frontGuestLine");
    var envelopeScene = $("#envelopeScene");

    var suite = $("#suite");
    var suiteHeading = $("#suiteHeading");
    var track$ = $("#track");
    var liveEl = $("#live");

    var cardImages = Array.prototype.slice.call(
        document.querySelectorAll(".card-img")
    );

    var state = "closed";
    var runId = 0;
    var animations = [];
    var ready = false;
    var lastTouchTime = 0;

    function setAppHeight() {
        var height = window.visualViewport
            ? window.visualViewport.height
            : window.innerHeight;

        root.style.setProperty(
            "--app-h",
            Math.round(height) + "px"
        );
    }

    setAppHeight();

    window.addEventListener("resize", setAppHeight);

    window.addEventListener("orientationchange", function () {
        window.setTimeout(setAppHeight, 250);
    });

    if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", setAppHeight);
        window.visualViewport.addEventListener("scroll", setAppHeight);
    }

    function isBroken(image) {
        return image.complete && image.naturalWidth === 0;
    }

    function markBroken(image) {
        if (!image.isConnected) {
            return;
        }

        if (image.closest(".envelope__card")) {
            image.closest(".envelope__card").hidden = true;
            return;
        }

        var fallback = document.createElement("div");

        fallback.className = "card-img card-fallback";
        fallback.setAttribute("role", "img");
        fallback.setAttribute(
            "aria-label",
            "Invitation card unavailable"
        );

        fallback.textContent =
            "This card could not be loaded. Please refresh or visit our wedding website for details.";

        image.replaceWith(fallback);
    }

    function whenLoaded(image, timeoutMilliseconds) {
        return new Promise(function (resolve) {
            if (isBroken(image)) {
                markBroken(image);
                resolve(false);
                return;
            }

            if (image.complete) {
                resolve(true);
                return;
            }

            image.addEventListener("load", function () {
                resolve(true);
            }, { once: true });

            image.addEventListener("error", function () {
                markBroken(image);
                resolve(false);
            }, { once: true });

            window.setTimeout(function () {
                resolve(image.complete && image.naturalWidth > 0);
            }, timeoutMilliseconds);
        });
    }

    function cancelAnimations() {
        animations.forEach(function (animation) {
            try {
                animation.cancel();
            } catch (error) {
                /* No action needed. */
            }
        });

        animations = [];
    }

    function setState(nextState) {
        state = nextState;
        app.dataset.state = nextState;

        if (nextState === "closed") {
            cancelAnimations();

            envelope.hidden = false;
            envelope.style.pointerEvents = "auto";

            suite.setAttribute("inert", "");
            suite.setAttribute("aria-hidden", "true");
        }

        if (nextState === "opened") {
            envelope.hidden = true;
            envelope.style.pointerEvents = "none";

            suite.removeAttribute("inert");
            suite.removeAttribute("aria-hidden");

            window.requestAnimationFrame(function () {
                track$.style.pointerEvents = "auto";
                track$.scrollLeft = 0;
                setIndex(0, true);

                suiteHeading.focus({
                    preventScroll: true
                });
            });
        }
    }

    function canAnimate() {
        return (
            typeof Element.prototype.animate === "function" &&
            !reducedMotion.matches
        );
    }

    function run(element, keyframes, options) {
        options = Object.assign(
            { fill: "forwards" },
            options || {}
        );

        if (!element || typeof element.animate !== "function") {
            return wait(
                (options.delay || 0) +
                (options.duration || 0)
            );
        }

        var animation = element.animate(keyframes, options);

        animations.push(animation);

        if (
            animation.finished &&
            typeof animation.finished.then === "function"
        ) {
            return animation.finished.catch(function () {
                return undefined;
            });
        }

        return wait(
            (options.delay || 0) +
            (options.duration || 0)
        );
    }

    async function playFullSequence(token) {
        var alive = function () {
            return token === runId;
        };

        var flap = $("#envFlap");
        var leftFold = $(".fold--left .fold__hinge");
        var rightFold = $(".fold--right .fold__hinge");
        var bottomFold = $(".fold--bottom .fold__hinge");
        var liner = $(".envelope__liner");
        var cardInner = $(".envelope__card-inner");

        await run(
            envelopeScene,
            [
                { transform: "rotateY(0deg)" },
                { transform: "rotateY(180deg)" }
            ],
            {
                duration: 720,
                easing: "cubic-bezier(0.22, 0.8, 0.25, 1)"
            }
        );

        if (!alive()) {
            return;
        }

        run(
            liner,
            [
                { opacity: 0 },
                { opacity: 1 }
            ],
            {
                duration: 350,
                easing: "ease-out"
            }
        );

        run(
            note,
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 180,
                easing: "ease-out"
            }
        );

        var flapDone = run(
            flap,
            [
                { transform: "rotateX(0deg)" },
                { transform: "rotateX(-180deg)" }
            ],
            {
                duration: 800,
                easing: "cubic-bezier(0.22, 0.8, 0.25, 1)"
            }
        );

        await wait(350);

        if (!alive()) {
            return;
        }

        var sideEase = "cubic-bezier(0.3, 0.7, 0.2, 1)";

        var leftDone = run(
            leftFold,
            [
                { transform: "rotateY(0deg)" },
                { transform: "rotateY(180deg)" }
            ],
            {
                duration: 820,
                easing: sideEase
            }
        );

        var rightDone = run(
            rightFold,
            [
                { transform: "rotateY(0deg)" },
                { transform: "rotateY(-180deg)" }
            ],
            {
                duration: 820,
                easing: sideEase
            }
        );

        await wait(280);

        if (!alive()) {
            return;
        }

        var cardDone = run(
            cardInner,
            [
                {
                    transform: "translateY(34%) scale(0.8)"
                },
                {
                    transform: "translateY(0) scale(1)"
                }
            ],
            {
                duration: 950,
                easing: "cubic-bezier(0.18, 0.88, 0.22, 1)"
            }
        );

        await wait(320);

        if (!alive()) {
            return;
        }

        var bottomDone = run(
            bottomFold,
            [
                { transform: "rotateX(0deg)" },
                { transform: "rotateX(180deg)" }
            ],
            {
                duration: 720,
                easing: sideEase
            }
        );

        await Promise.all([
            flapDone,
            leftDone,
            rightDone,
            cardDone,
            bottomDone
        ]);

        if (!alive()) {
            return;
        }

        await run(
            envelope,
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );
    }

    async function playSimpleSequence() {
        if (typeof envelope.animate === "function") {
            await run(
                envelope,
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    duration: 250,
                    easing: "linear"
                }
            );
        } else {
            await wait(50);
        }
    }

    async function openInvitation() {
        if (state !== "closed" || !ready) {
            return;
        }

        setState("opening");

        var token = ++runId;

        try {
            var sequence = canAnimate()
                ? playFullSequence(token)
                : playSimpleSequence();

            await Promise.race([
                sequence,
                wait(9000)
            ]);
        } catch (error) {
            /* Continue to invitation suite. */
        }

        if (token !== runId) {
            return;
        }

        setState("opened");
    }

    function skipAnimation() {
        if (state === "opened") {
            return;
        }

        runId++;
        setState("opened");
    }

    function requestOpen(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        openInvitation();
    }

    openTarget.addEventListener("touchend", function (event) {
        lastTouchTime = Date.now();
        requestOpen(event);
    }, { passive: false });

    openTarget.addEventListener("click", function (event) {
        if (Date.now() - lastTouchTime < 700) {
            return;
        }

        requestOpen(event);
    });

    document.addEventListener("keydown", function (event) {
        if (state === "opened") {
            return;
        }

        if (event.key === "Escape") {
            skipAnimation();
        }

        if (event.key === "Tab") {
            event.preventDefault();
            openTarget.focus();
        }

        if (
            (event.key === "Enter" || event.key === " ") &&
            document.activeElement === openTarget
        ) {
            event.preventDefault();
            openInvitation();
        }
    });

    /* =========================================================
       CAROUSEL
       ========================================================= */
    var slides = Array.prototype.slice.call(track$.children);
    var pips = Array.prototype.slice.call(
        document.querySelectorAll(".indicator span")
    );

    var index = 0;
    var scrollFrame = 0;

    function setIndex(nextIndex, silent) {
        index = nextIndex;

        pips.forEach(function (pip, pipIndex) {
            pip.classList.toggle(
                "is-current",
                pipIndex === nextIndex
            );
        });

        if (!silent) {
            liveEl.textContent =
                "Card " +
                (nextIndex + 1) +
                " of " +
                slides.length +
                ": " +
                (CARD_LABELS[nextIndex] || "");
        }
    }

    function goTo(nextIndex, options) {
        options = options || {};

        var count = slides.length;

        nextIndex =
            ((nextIndex % count) + count) % count;

        track$.scrollTo({
            left: nextIndex * track$.clientWidth,
            behavior:
                options.instant || reducedMotion.matches
                    ? "auto"
                    : "smooth"
        });

        setIndex(nextIndex, options.silent);
    }

    track$.addEventListener("scroll", function () {
        window.cancelAnimationFrame(scrollFrame);

        scrollFrame = window.requestAnimationFrame(function () {
            var width = track$.clientWidth || 1;

            var currentIndex = clamp(
                Math.round(track$.scrollLeft / width),
                0,
                slides.length - 1
            );

            if (currentIndex !== index) {
                setIndex(currentIndex, false);
            }
        });
    }, { passive: true });

    track$.addEventListener("keydown", function (event) {
        var keyMap = {
            ArrowLeft: index - 1,
            ArrowRight: index + 1,
            Home: 0,
            End: slides.length - 1
        };

        if (Object.prototype.hasOwnProperty.call(keyMap, event.key)) {
            event.preventDefault();
            goTo(keyMap[event.key]);
        }
    });

    track$.addEventListener("click", function () {
        if (state !== "opened") {
            return;
        }

        goTo(index + 1);
    });

    function realign() {
        track$.scrollTo({
            left: index * track$.clientWidth,
            behavior: "auto"
        });
    }

    var resizeTimer = 0;

    window.addEventListener("resize", function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(realign, 150);
    });

    window.addEventListener("orientationchange", function () {
        window.setTimeout(realign, 280);
    });

    function readGuest() {
        try {
            var guest = new URLSearchParams(
                window.location.search
            ).get("guest") || "";

            return guest
                .replace(/[\u0000-\u001f\u007f<>]/g, "")
                .trim()
                .slice(0, 60);
        } catch (error) {
            return "";
        }
    }

    function init() {
        window.clearTimeout(window.__inviteBoot);

        root.classList.remove("js-failed");

        var guest = readGuest();

        if (guest) {
            frontGuestLine.textContent = "For " + guest;
            frontGuestLine.hidden = false;
        }

        setState("closed");
        setIndex(0, true);

        /* Open immediately; image loading continues in the background. */
        ready = true;

        Promise.all(
            cardImages.map(function (image) {
                return whenLoaded(image, 8000);
            })
        );
    }

    init();
})();
