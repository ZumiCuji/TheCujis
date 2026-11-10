/* =========================================================
   Zumi & Morgan — e-invitation behavior
   Mobile-ready version
   ========================================================= */
(function () {
    'use strict';

    var CARD_LABELS = [
        'Formal invitation',
        'Wedding details',
        'Photo card'
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
        '(prefers-reduced-motion: reduce)'
    );

    var app = $('#app');
    var envelope = $('#envelope');
    var seal = $('#seal');
    var note = $('#envNote');
    var guestLine = $('#guestLine');
    var suite = $('#suite');
    var suiteHeading = $('#suiteHeading');
    var track$ = $('#track');
    var liveEl = $('#live');

    var cardImages = Array.prototype.slice.call(
        document.querySelectorAll('.card-img')
    );

    var state = 'closed';
    var runId = 0;
    var animations = [];
    var ready = false;
    var lastTouchTime = 0;

    /* =========================================================
       VIEWPORT HEIGHT — Stabilizes iPhone Safari browser chrome
       ========================================================= */
    function setAppHeight() {
        var height = window.visualViewport
            ? window.visualViewport.height
            : window.innerHeight;

        root.style.setProperty('--app-h', Math.round(height) + 'px');
    }

    setAppHeight();

    window.addEventListener('resize', setAppHeight);

    window.addEventListener('orientationchange', function () {
        window.setTimeout(setAppHeight, 250);
    });

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', setAppHeight);
        window.visualViewport.addEventListener('scroll', setAppHeight);
    }

    /* =========================================================
       OPTIONAL ANALYTICS HOOK
       ========================================================= */
    function track(name, data) {
        try {
            window.dispatchEvent(
                new CustomEvent('invite:event', {
                    detail: Object.assign({ name: name }, data || {})
                })
            );

            if (typeof window.inviteAnalytics === 'function') {
                window.inviteAnalytics(name, data || {});
            }
        } catch (error) {
            /* Analytics must never break the invitation. */
        }
    }

    /* =========================================================
       IMAGE FALLBACKS
       ========================================================= */
    function isBroken(image) {
        return image.complete && image.naturalWidth === 0;
    }

    function markBroken(image) {
        if (!image.isConnected) {
            return;
        }

        if (image.closest('.envelope__card')) {
            image.closest('.envelope__card').hidden = true;
            return;
        }

        var fallback = document.createElement('div');

        fallback.className = 'card-img card-fallback';
        fallback.setAttribute('role', 'img');
        fallback.setAttribute('aria-label', 'Invitation card unavailable');

        fallback.textContent =
            'This card could not be loaded. Please refresh, or visit our wedding website for details.';

        image.replaceWith(fallback);

        track('image_error', {
            src: image.getAttribute('src')
        });
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

            image.addEventListener('load', function () {
                resolve(true);
            }, { once: true });

            image.addEventListener('error', function () {
                markBroken(image);
                resolve(false);
            }, { once: true });

            window.setTimeout(function () {
                resolve(image.complete && image.naturalWidth > 0);
            }, timeoutMilliseconds);
        });
    }

    /* =========================================================
       ENVELOPE STATE
       ========================================================= */
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

        if (nextState === 'opened') {
            envelope.hidden = true;

            /*
               Critical mobile fix:
               Disable all envelope interaction after the animation.
               This prevents the invisible overlay from blocking
               swipes, card taps, and carousel interactions.
            */
            envelope.style.pointerEvents = 'none';

            cancelAnimations();

            suite.removeAttribute('inert');
            suite.removeAttribute('aria-hidden');

            suiteHeading.focus({
                preventScroll: true
            });
        }

        if (nextState === 'closed') {
            cancelAnimations();

            envelope.hidden = false;
            envelope.style.pointerEvents = 'auto';

            suite.setAttribute('inert', '');
            suite.setAttribute('aria-hidden', 'true');
        }
    }

    function canAnimate() {
        return (
            typeof Element.prototype.animate === 'function' &&
            !reducedMotion.matches
        );
    }

    /*
       Reliable WAAPI helper:
       Older mobile Safari can expose .animate() while not reliably
       exposing Animation.finished, so this always has a timer fallback.
    */
    function run(element, keyframes, options) {
        options = Object.assign({
            fill: 'forwards'
        }, options || {});

        if (
            !element ||
            typeof element.animate !== 'function'
        ) {
            return wait(options.duration || 0);
        }

        var animation = element.animate(keyframes, options);

        animations.push(animation);

        if (animation.finished && typeof animation.finished.then === 'function') {
            return animation.finished.catch(function () {
                return undefined;
            });
        }

        return wait(
            (options.delay || 0) +
            (options.duration || 0)
        );
    }

    /* =========================================================
       FULL ENVELOPE OPENING SEQUENCE
       ========================================================= */
    async function playFullSequence(token) {
        var isAlive = function () {
            return token === runId;
        };

        var flap = $('#envFlap');
        var leftFold = $('.fold--left .fold__hinge');
        var rightFold = $('.fold--right .fold__hinge');
        var bottomFold = $('.fold--bottom .fold__hinge');
        var liner = $('.envelope__liner');
        var cardInner = $('.envelope__card-inner');

        /* 1. Seal presses slightly inward. */
        await run(
            seal,
            [
                { transform: 'scale(1)' },
                { transform: 'scale(0.9)' }
            ],
            {
                duration: 220,
                easing: 'ease-out'
            }
        );

        if (!isAlive()) {
            return;
        }

        /* 2. Seal and note disappear; liner begins appearing. */
        run(
            seal,
            [
                {
                    transform: 'scale(0.9) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: 'scale(1.35) rotate(10deg)',
                    opacity: 0
                }
            ],
            {
                duration: 340,
                easing: 'ease-out'
            }
        );

        run(
            note,
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 220,
                easing: 'ease-out'
            }
        );

        if (!guestLine.hidden) {
            run(
                guestLine,
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    duration: 220,
                    easing: 'ease-out'
                }
            );
        }

        run(
            liner,
            [
                { opacity: 0 },
                { opacity: 1 }
            ],
            {
                duration: 400,
                delay: 100,
                easing: 'ease-out'
            }
        );

        /* 3. Top flap opens. */
        var flapDone = run(
            flap,
            [
                { transform: 'rotateX(0deg)' },
                { transform: 'rotateX(-180deg)' }
            ],
            {
                duration: 780,
                easing: 'cubic-bezier(0.22, 0.8, 0.25, 1)'
            }
        );

        await wait(360);

        if (!isAlive()) {
            return;
        }

        /* 4. Side folds swing outward. */
        var sideEase = 'cubic-bezier(0.3, 0.7, 0.2, 1)';

        var leftDone = run(
            leftFold,
            [
                { transform: 'rotateY(0deg)' },
                { transform: 'rotateY(180deg)' }
            ],
            {
                duration: 820,
                easing: sideEase
            }
        );

        var rightDone = run(
            rightFold,
            [
                { transform: 'rotateY(0deg)' },
                { transform: 'rotateY(-180deg)' }
            ],
            {
                duration: 820,
                easing: sideEase
            }
        );

        await wait(280);

        if (!isAlive()) {
            return;
        }

        /* 5. Invitation rises from the center pocket. */
        var cardDone = run(
            cardInner,
            [
                {
                    transform: 'translateY(34%) scale(0.8)'
                },
                {
                    transform: 'translateY(0) scale(1)'
                }
            ],
            {
                duration: 950,
                easing: 'cubic-bezier(0.18, 0.88, 0.22, 1)'
            }
        );

        await wait(320);

        if (!isAlive()) {
            return;
        }

        /* 6. Bottom fold opens downward. */
        var bottomDone = run(
            bottomFold,
            [
                { transform: 'rotateX(0deg)' },
                { transform: 'rotateX(180deg)' }
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

        if (!isAlive()) {
            return;
        }

        /* 7. Fade envelope into the main carousel card. */
        await run(
            envelope,
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 400,
                easing: 'ease-out'
            }
        );
    }

    async function playSimpleSequence() {
        if (typeof envelope.animate === 'function') {
            await run(
                envelope,
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    duration: 250,
                    easing: 'linear'
                }
            );
        } else {
            await wait(50);
        }
    }

    async function openInvitation() {
        if (state !== 'closed' || !ready) {
            return;
        }

        setState('opening');

        var token = ++runId;

        track('open', {
            mode: canAnimate() ? 'full' : 'simple'
        });

        try {
            var animation = canAnimate()
                ? playFullSequence(token)
                : playSimpleSequence();

            await Promise.race([
                animation,
                wait(7000)
            ]);
        } catch (error) {
            /* Always proceed to the invitation suite. */
        }

        if (token !== runId) {
            return;
        }

        setState('opened');
    }

    function skipAnimation() {
        if (state === 'opened') {
            return;
        }

        runId++;

        track('skip');

        setState('opened');
    }

    /*
       Mobile-safe opening:
       - seal click works for mouse and keyboard
       - seal touchend works for iPhone/Android
       - envelope click allows tapping anywhere on the envelope
       - duplicate events are ignored
    */
    function requestOpen(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        openInvitation();
    }

    seal.addEventListener('click', requestOpen);

    seal.addEventListener('touchend', function (event) {
        lastTouchTime = Date.now();
        requestOpen(event);
    }, { passive: false });

    envelope.addEventListener('click', function (event) {
        if (Date.now() - lastTouchTime < 700) {
            return;
        }

        if (event.target === seal) {
            return;
        }

        openInvitation();
    });

    document.addEventListener('keydown', function (event) {
        if (state === 'opened') {
            return;
        }

        if (event.key === 'Escape') {
            skipAnimation();
        }

        if (event.key === 'Tab') {
            event.preventDefault();
            seal.focus();
        }

        if (event.key === 'Enter' || event.key === ' ') {
            if (document.activeElement === seal) {
                event.preventDefault();
                openInvitation();
            }
        }
    });

    window.addEventListener('pageshow', function (event) {
        if (event.persisted && state === 'opening') {
            skipAnimation();
        }
    });

    /* =========================================================
       CAROUSEL
       ========================================================= */
    var slides = Array.prototype.slice.call(track$.children);
    var pips = Array.prototype.slice.call(
        document.querySelectorAll('.indicator span')
    );

    var index = 0;
    var scrollFrame = 0;

    function setIndex(nextIndex, silent) {
        index = nextIndex;

        pips.forEach(function (pip, pipIndex) {
            pip.classList.toggle(
                'is-current',
                pipIndex === nextIndex
            );
        });

        if (!silent) {
            liveEl.textContent =
                'Card ' +
                (nextIndex + 1) +
                ' of ' +
                slides.length +
                ': ' +
                (CARD_LABELS[nextIndex] || '');
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
                    ? 'auto'
                    : 'smooth'
        });

        setIndex(nextIndex, options.silent);

        if (!options.silent) {
            track('card', {
                index: nextIndex
            });
        }
    }

    track$.addEventListener('scroll', function () {
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

    track$.addEventListener('keydown', function (event) {
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

    /*
       Native mobile touch scrolling is preserved.
       Mouse dragging is added only for desktop users.
    */
    var drag = null;
    var justDragged = false;

    track$.addEventListener('pointerdown', function (event) {
        if (event.pointerType !== 'mouse' || event.button !== 0) {
            return;
        }

        drag = {
            x: event.clientX,
            left: track$.scrollLeft
        };

        track$.setPointerCapture(event.pointerId);
        track$.classList.add('is-dragging');
    });

    track$.addEventListener('pointermove', function (event) {
        if (!drag) {
            return;
        }

        track$.scrollLeft = drag.left - (event.clientX - drag.x);
    });

    function endDrag(event) {
        if (!drag) {
            return;
        }

        var change = event.clientX - drag.x;
        var width = track$.clientWidth || 1;
        var target = Math.round(track$.scrollLeft / width);

        if (Math.abs(change) > width * 0.12) {
            target = clamp(
                index + (change < 0 ? 1 : -1),
                0,
                slides.length - 1
            );
        }

        justDragged = Math.abs(change) > 5;

        window.setTimeout(function () {
            justDragged = false;
        }, 0);

        drag = null;
        track$.classList.remove('is-dragging');

        goTo(target);
    }

    track$.addEventListener('pointerup', endDrag);
    track$.addEventListener('pointercancel', endDrag);

    /* Tap current card to advance to the next card. */
    track$.addEventListener('click', function () {
        if (justDragged || state !== 'opened') {
            return;
        }

        goTo(index + 1);
    });

    function realign() {
        track$.scrollTo({
            left: index * track$.clientWidth,
            behavior: 'auto'
        });
    }

    var resizeTimer = 0;

    window.addEventListener('resize', function () {
        window.clearTimeout(resizeTimer);

        resizeTimer = window.setTimeout(realign, 150);
    });

    window.addEventListener('orientationchange', function () {
        window.setTimeout(realign, 280);
    });

    /* =========================================================
       INIT
       ========================================================= */
    function readGuest() {
        try {
            var guest = new URLSearchParams(
                window.location.search
            ).get('guest') || '';

            return guest
                .replace(/[\u0000-\u001f\u007f<>]/g, '')
                .trim()
                .slice(0, 60);
        } catch (error) {
            return '';
        }
    }

    function init() {
        window.clearTimeout(window.__inviteBoot);

        root.classList.remove('js-failed');

        var guest = readGuest();

        if (guest) {
            guestLine.textContent = 'For ' + guest;
            guestLine.hidden = false;
        }

        setState('closed');
        setIndex(0, true);

        note.textContent = 'Preparing…';

        seal.disabled = true;
        seal.setAttribute('aria-disabled', 'true');

        Promise.all(
            cardImages.map(function (image) {
                return whenLoaded(image, 8000);
            })
        ).then(function () {
            ready = true;

            seal.disabled = false;
            seal.removeAttribute('aria-disabled');

            note.textContent = 'Tap to open';

            track('ready');
        });
    }

    init();
})();
