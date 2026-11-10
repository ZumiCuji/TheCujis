/* =========================================================
   Zumi & Morgan — e-invitation behavior
   Sections: helpers · images · envelope state machine · carousel · init
   No dependencies, no build step.
   ========================================================= */
(function () {
    'use strict';

    var CARD_LABELS = ['Formal invitation', 'Wedding details', 'Photo card'];

    /* ---------- helpers ---------- */
    var root = document.documentElement;
    var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
    var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
    var clamp = function (n, lo, hi) { return Math.max(lo, Math.min(hi, n)); };
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    /** Privacy-friendly analytics hook. Listen for 'invite:event' or define window.inviteAnalytics. No PII. */
    function track(name, data) {
        try {
            window.dispatchEvent(new CustomEvent('invite:event', { detail: Object.assign({ name: name }, data || {}) }));
            if (typeof window.inviteAnalytics === 'function') window.inviteAnalytics(name, data || {});
        } catch (e) { /* analytics must never break the page */ }
    }

    var app = $('#app');
    var envelope = $('#envelope');
    var seal = $('#seal');
    var note = $('#envNote');
    var guestLine = $('#guestLine');
    var suite = $('#suite');
    var suiteHeading = $('#suiteHeading');
    var track$ = $('#track');
    var liveEl = $('#live');

    /* Browsers without dvh (iOS < 15.4): drive --app-h from innerHeight */
    if (!(window.CSS && CSS.supports && CSS.supports('height', '100dvh'))) {
        var setAppHeight = function () { root.style.setProperty('--app-h', window.innerHeight + 'px'); };
        setAppHeight();
        window.addEventListener('resize', setAppHeight);
    }

    /* ---------- images: load tracking + friendly fallback ---------- */
    var cardImgs = Array.prototype.slice.call(document.querySelectorAll('.card-img'));

    function isBroken(img) { return img.complete && img.naturalWidth === 0; }

    function markBroken(img) {
        if (!img.isConnected) return;
        if (img.closest('.envelope__card')) {           // decorative copy: just drop it
            img.closest('.envelope__card').hidden = true;
            return;
        }
        var box = document.createElement('div');
        box.className = 'card-img card-fallback';
        box.setAttribute('role', 'img');
        box.setAttribute('aria-label', 'Invitation card unavailable');
        box.textContent = 'This card could not be loaded. Please refresh to try again, or visit our wedding website for the details.';
        img.replaceWith(box);
        track('image_error', { src: img.getAttribute('src') });
    }

    function whenLoaded(img, timeoutMs) {
        return new Promise(function (resolve) {
            if (isBroken(img)) { markBroken(img); return resolve(false); }
            if (img.complete) return resolve(true);
            img.addEventListener('load', function () { resolve(true); }, { once: true });
            img.addEventListener('error', function () { markBroken(img); resolve(false); }, { once: true });
            setTimeout(function () { resolve(img.complete && img.naturalWidth > 0); }, timeoutMs);
        });
    }

    /* ---------- ENVELOPE state machine: closed → opening → opened ---------- */
    var state = 'closed';
    var runId = 0;                 // bumps on skip so stale async steps bail out
    var live = [];                 // running Animation objects
    var ready = false;

    function cancelAnimations() {
        live.forEach(function (a) { try { a.cancel(); } catch (e) { /* noop */ } });
        live = [];
    }

    function setState(next) {
        state = next;
        app.dataset.state = next;

        if (next === 'opened') {
            envelope.hidden = true;
            cancelAnimations();
            suite.removeAttribute('inert');
            suite.removeAttribute('aria-hidden');
            suiteHeading.focus({ preventScroll: true });
        } else if (next === 'closed') {
            cancelAnimations();
            envelope.hidden = false;
            suite.setAttribute('inert', '');
            suite.setAttribute('aria-hidden', 'true');
        }
    }

    function canAnimate() {
        return typeof Element.prototype.animate === 'function' && !reducedMotion.matches;
    }

    /** Runs one Web Animation (transform/opacity only → compositor, 60fps). */
    function run(el, keyframes, options) {
        var a = el.animate(keyframes, Object.assign({ fill: 'forwards' }, options));
        live.push(a);
        return a.finished.catch(function () { /* cancelled */ });
    }

    /**
     * Choreography:
     * seal press → seal breaks → top flap lifts → side folds swing open →
     * card rises out → bottom fold drops → envelope fades onto the identical card beneath.
     */
    async function playFullSequence(token) {
        var alive = function () { return token === runId; };
        var flap = $('#envFlap');
        var leftFold = $('.fold--left .fold__hinge');
        var rightFold = $('.fold--right .fold__hinge');
        var bottomFold = $('.fold--bottom .fold__hinge');
        var liner = $('.envelope__liner');
        var cardInner = $('.envelope__card-inner');

        // 1. Seal press
        await run(seal, [{ transform: 'scale(1)' }, { transform: 'scale(0.9)' }], { duration: 240, easing: 'ease-out' });
        if (!alive()) return;

        // 2. Seal breaks away; helper text fades; inside of the envelope appears
        run(seal, [{ transform: 'scale(0.9) rotate(0deg)', opacity: 1 }, { transform: 'scale(1.4) rotate(12deg)', opacity: 0 }], { duration: 360, easing: 'ease-out' });
        run(note, [{ opacity: 1 }, { opacity: 0 }], { duration: 200 });
        if (!guestLine.hidden) run(guestLine, [{ opacity: 1 }, { opacity: 0 }], { duration: 250 });
        run(liner, [{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: 150 });

        // 3. Top flap lifts back
        var flapDone = run(flap, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-180deg)' }], { duration: 800, easing: 'cubic-bezier(0.22, 0.8, 0.25, 1)' });
        await wait(420);
        if (!alive()) return;

        // 4. Left and right folds swing open on their outer-edge hinges
        var sideEase = 'cubic-bezier(0.3, 0.7, 0.2, 1)';
        var leftDone = run(leftFold, [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(180deg)' }], { duration: 850, easing: sideEase });
        var rightDone = run(rightFold, [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(-180deg)' }], { duration: 850, easing: sideEase });
        await wait(350);
        if (!alive()) return;

        // 5. Card rises out of the pocket
        var cardDone = run(cardInner, [{ transform: 'translateY(34%) scale(0.8)' }, { transform: 'translateY(0) scale(1)' }], { duration: 1000, easing: 'cubic-bezier(0.18, 0.88, 0.22, 1)' });
        await wait(350);
        if (!alive()) return;

        // 6. Bottom fold drops open
        var bottomDone = run(bottomFold, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(180deg)' }], { duration: 750, easing: 'cubic-bezier(0.3, 0.7, 0.2, 1)' });
        await Promise.all([flapDone, leftDone, rightDone, cardDone, bottomDone]);
        if (!alive()) return;

        // 7. Envelope fades onto the matching card beneath
        await run(envelope, [{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: 'ease-out' });
    }

    /** Reduced-motion / no-WAAPI path: no movement, just a short cross-fade. */
    async function playSimpleSequence() {
        if (typeof Element.prototype.animate === 'function') {
            await run(envelope, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: 'linear' });
        } else {
            await wait(50);
        }
    }

    async function openInvitation() {
        if (state !== 'closed' || !ready) return;
        setState('opening');
        var token = ++runId;
        track('open', { mode: canAnimate() ? 'full' : 'simple' });

        try {
            var play = canAnimate() ? playFullSequence(token) : playSimpleSequence();
            await Promise.race([play, wait(7000)]);   // hard cap: can never hang
        } catch (e) { /* fall through to finish */ }

        if (token !== runId) return;                  // skipped meanwhile
        setState('opened');
    }

    function skipAnimation() {
        if (state === 'opened') return;
        runId++;
        track('skip');
        setState('opened');
    }

    // One code path for every input: click fires for touch, mouse and keyboard
    // (touch-action: manipulation removes the 300ms delay, so no touchend hacks).
    envelope.addEventListener('click', openInvitation);

    // Escape reveals the invitation immediately; Tab stays on the seal while the envelope is up
    document.addEventListener('keydown', function (e) {
        if (state === 'opened') return;
        if (e.key === 'Escape') { skipAnimation(); return; }
        if (e.key === 'Tab') { e.preventDefault(); seal.focus(); }
    });

    // Back/forward cache: never restore a half-finished animation
    window.addEventListener('pageshow', function (e) {
        if (e.persisted && state === 'opening') skipAnimation();
    });

    /* ---------- CAROUSEL (swipe / tap / drag / arrow keys — no buttons) ---------- */
    var slides = Array.prototype.slice.call(track$.children);
    var pips = Array.prototype.slice.call(document.querySelectorAll('.indicator span'));
    var index = 0;

    function setIndex(i, silent) {
        index = i;
        pips.forEach(function (p, n) { p.classList.toggle('is-current', n === i); });
        if (!silent) liveEl.textContent = 'Card ' + (i + 1) + ' of ' + slides.length + ': ' + (CARD_LABELS[i] || '');
    }

    function goTo(i, opts) {
        opts = opts || {};
        var n = slides.length;
        i = ((i % n) + n) % n;
        track$.scrollTo({ left: i * track$.clientWidth, behavior: (opts.instant || reducedMotion.matches) ? 'auto' : 'smooth' });
        setIndex(i, opts.silent);
        if (!opts.silent) track('card', { index: i });
    }

    // Native scroll-snap gives momentum + snapping on touch; we only sync the indicator
    var rafId = 0;
    track$.addEventListener('scroll', function () {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
            var i = clamp(Math.round(track$.scrollLeft / track$.clientWidth), 0, slides.length - 1);
            if (i !== index) setIndex(i);
        });
    }, { passive: true });

    track$.addEventListener('keydown', function (e) {
        var map = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: slides.length - 1 };
        if (e.key in map) { e.preventDefault(); goTo(map[e.key]); }
    });

    // Mouse drag (touch & pen already scroll natively)
    var drag = null;
    var justDragged = false;
    track$.addEventListener('pointerdown', function (e) {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        drag = { x: e.clientX, left: track$.scrollLeft };
        track$.setPointerCapture(e.pointerId);
        track$.classList.add('is-dragging');
    });
    track$.addEventListener('pointermove', function (e) {
        if (drag) track$.scrollLeft = drag.left - (e.clientX - drag.x);
    });
    function endDrag(e) {
        if (!drag) return;
        var dx = e.clientX - drag.x;
        var w = track$.clientWidth;
        var target = Math.round(track$.scrollLeft / w);
        if (Math.abs(dx) > w * 0.12) target = clamp(index + (dx < 0 ? 1 : -1), 0, slides.length - 1);
        justDragged = Math.abs(dx) > 5;
        setTimeout(function () { justDragged = false; }, 0);
        drag = null;
        track$.classList.remove('is-dragging');
        goTo(target);
    }
    track$.addEventListener('pointerup', endDrag);
    track$.addEventListener('pointercancel', endDrag);

    // Tap / click a card to move to the next one (a swipe never fires a click)
    track$.addEventListener('click', function () {
        if (justDragged) return;
        goTo(index + 1);
    });

    // Keep the current card aligned on rotate / resize
    var resizeTimer = 0;
    function realign() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            track$.scrollTo({ left: index * track$.clientWidth, behavior: 'auto' });
        }, 120);
    }
    window.addEventListener('resize', realign);
    window.addEventListener('orientationchange', realign);

    /* ---------- INIT ---------- */
    function readGuest() {
        try {
            var g = new URLSearchParams(window.location.search).get('guest') || '';
            return g.replace(/[\u0000-\u001f\u007f<>]/g, '').trim().slice(0, 60);
        } catch (e) { return ''; }
    }

    function init() {
        clearTimeout(window.__inviteBoot);
        root.classList.remove('js-failed');

        var guest = readGuest();
        if (guest) {
            guestLine.textContent = 'For ' + guest;      // textContent → always escaped
            guestLine.hidden = false;
        }

        setState('closed');
        setIndex(0, true);

        note.textContent = 'Preparing…';
        seal.setAttribute('aria-disabled', 'true');

        // Don't open onto blank cards: wait for images (max 8s), then enable the seal
        Promise.all(cardImgs.map(function (img) { return whenLoaded(img, 8000); })).then(function () {
            ready = true;
            seal.removeAttribute('aria-disabled');
            note.textContent = 'Tap to open';
            track('ready');
        });
    }

    init();
})();
