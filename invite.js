/* =========================================================
   Zumi & Morgan — e-invitation behavior
   Sections: config · helpers · envelope state machine · carousel · actions · init
   No dependencies, no build step.
   ========================================================= */
(function () {
    'use strict';

    /* ---------- 1. CONFIG — edit this block ---------- */
    var CONFIG = {
        eventTitle: 'Wedding of Zumi Cuji & Morgan Fields',
        date: '2027-05-03',                 // Monday, May 3, 2027
        allDay: true,                       // set false + fill times below once you know them
        startTime: '17:00',
        endTime: '23:00',
        timeZone: 'America/New_York',       // used for the Google link when allDay is false
        venue: '',                          // e.g. 'The Carolina Inn'
        address: 'Raleigh, NC',
        description: 'We would love to celebrate with you! Details: https://zumicuji.github.io/TheCujis/index.html',
        websiteUrl: 'https://zumicuji.github.io/TheCujis/index.html',
        shareUrl: 'https://zumicuji.github.io/TheCujis/invite.html',
        rsvpUrl: '',                        // empty = RSVP button stays hidden
        mapUrl: '',                         // empty = Google Maps search of venue/address
        musicSrc: '',                       // e.g. 'music.mp3'; empty = music button hidden
        cardLabels: ['Formal invitation', 'Wedding details', 'Photo card']
    };

    /* ---------- 2. helpers ---------- */
    var root = document.documentElement;
    var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
    var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
    var clamp = function (n, lo, hi) { return Math.max(lo, Math.min(hi, n)); };
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    /** Privacy-friendly analytics hook. No PII is ever passed (guest name is excluded). */
    function track(name, data) {
        try {
            window.dispatchEvent(new CustomEvent('invite:event', { detail: Object.assign({ name: name }, data || {}) }));
            if (typeof window.inviteAnalytics === 'function') window.inviteAnalytics(name, data || {});
        } catch (e) { /* analytics must never break the page */ }
    }

    var app = $('#app');
    var envelope = $('#envelope');
    var seal = $('#seal');
    var skipBtn = $('#skipBtn');
    var note = $('#envNote');
    var guestLine = $('#guestLine');
    var suite = $('#suite');
    var suiteHeading = $('#suiteHeading');
    var track$ = $('#track');
    var toastEl = $('#toast');
    var liveEl = $('#live');

    /* Browsers without dvh (iOS < 15.4): drive --app-h from innerHeight instead */
    if (!(window.CSS && CSS.supports && CSS.supports('height', '100dvh'))) {
        var setAppHeight = function () { root.style.setProperty('--app-h', window.innerHeight + 'px'); };
        setAppHeight();
        window.addEventListener('resize', setAppHeight);
    }

    /* ---------- 3. images: load tracking + friendly fallback ---------- */
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

    /* ---------- 4. ENVELOPE state machine: closed → opening → opened → (replay) closed ---------- */
    var state = 'closed';
    var runId = 0;                 // bumps on skip/replay so stale async steps bail out
    var live = [];                 // running Animation objects
    var ready = false;

    function setState(next) {
        state = next;
        app.dataset.state = next;

        if (next === 'opened') {
            envelope.hidden = true;
            live.forEach(function (a) { try { a.cancel(); } catch (e) { /* noop */ } });
            live = [];
            suite.removeAttribute('inert');
            suite.removeAttribute('aria-hidden');
            suiteHeading.focus({ preventScroll: true });
        } else if (next === 'closed') {
            live.forEach(function (a) { try { a.cancel(); } catch (e) { /* noop */ } });
            live = [];
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

    /** Full choreography: seal press → seal break → flap opens → card slides out → pocket drops → fade. */
    async function playFullSequence(token) {
        var alive = function () { return token === runId; };
        var flap = $('#envFlap');
        var liner = $('.envelope__liner');
        var front = $('.envelope__front');
        var cardInner = $('.envelope__card-inner');

        // 1. Seal press
        await run(seal, [{ transform: 'scale(1)' }, { transform: 'scale(0.9)' }], { duration: 240, easing: 'ease-out' });
        if (!alive()) return;

        // 2. Seal breaks away; helper text fades
        run(seal, [{ transform: 'scale(0.9) rotate(0deg)', opacity: 1 }, { transform: 'scale(1.4) rotate(12deg)', opacity: 0 }], { duration: 360, easing: 'ease-out' });
        run(note, [{ opacity: 1 }, { opacity: 0 }], { duration: 200 });
        if (!guestLine.hidden) run(guestLine, [{ opacity: 1 }, { opacity: 0 }], { duration: 250 });
        run(liner, [{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200 });

        // 3. Flap lifts (3D rotation on a perspective parent)
        var flapDone = run(flap, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-180deg)' }], { duration: 850, easing: 'cubic-bezier(0.22, 0.8, 0.25, 1)' });
        await wait(500);
        if (!alive()) return;

        // 4. Card rises out of the pocket
        var cardDone = run(cardInner, [{ transform: 'translateY(34%) scale(0.8)' }, { transform: 'translateY(0) scale(1)' }], { duration: 1000, easing: 'cubic-bezier(0.18, 0.88, 0.22, 1)' });
        await wait(450);
        if (!alive()) return;

        // 5. Front of the envelope drops away
        var frontDone = run(front, [{ transform: 'translateY(0)' }, { transform: 'translateY(105%)' }], { duration: 700, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
        await Promise.all([flapDone, cardDone, frontDone]);
        if (!alive()) return;

        // 6. Whole envelope fades onto the identical card beneath
        await run(envelope, [{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: 'ease-out' });
    }

    /** Reduced-motion / no-WAAPI path: no movement, just a short cross-fade. */
    async function playSimpleSequence(token) {
        if (typeof Element.prototype.animate === 'function') {
            await run(envelope, [{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: 'linear' });
        } else {
            await wait(50);
        }
        return token;
    }

    async function openInvitation() {
        if (state !== 'closed' || !ready) return;
        setState('opening');
        var token = ++runId;
        track('open', { mode: canAnimate() ? 'full' : 'simple' });

        try {
            var play = canAnimate() ? playFullSequence(token) : playSimpleSequence(token);
            await Promise.race([play, wait(6000)]);   // hard cap: can never hang
        } catch (e) { /* fall through to finish */ }

        if (token !== runId) return;                  // skipped or replayed meanwhile
        setState('opened');
    }

    function skipAnimation() {
        if (state === 'opened') return;
        runId++;
        track('skip');
        setState('opened');
    }

    function replay() {
        runId++;
        closeMenu();
        setState('closed');
        goTo(0, { instant: true, silent: true });
        seal.focus({ preventScroll: true });
        track('replay');
    }

    // One code path for every input: click fires for touch, mouse and keyboard
    // (touch-action: manipulation removes the 300ms delay, so no touchend hacks).
    envelope.addEventListener('click', function (e) {
        if (e.target.closest('#skipBtn')) return;
        openInvitation();
    });
    skipBtn.addEventListener('click', skipAnimation);

    // Escape skips; Tab is trapped between seal and skip while the envelope is up
    document.addEventListener('keydown', function (e) {
        if (state === 'opened') return;
        if (e.key === 'Escape') { skipAnimation(); return; }
        if (e.key === 'Tab') {
            var items = [seal, skipBtn];
            var i = items.indexOf(document.activeElement);
            if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
            else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
            else if (i === -1) { e.preventDefault(); seal.focus(); }
        }
    });

    // Back/forward cache: never restore a half-finished animation
    window.addEventListener('pageshow', function (e) {
        if (e.persisted && state === 'opening') skipAnimation();
    });

    /* ---------- 5. CAROUSEL ---------- */
    var slides = Array.prototype.slice.call(track$.children);
    var dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));
    var index = 0;

    function announce(i) {
        liveEl.textContent = 'Card ' + (i + 1) + ' of ' + slides.length + ': ' + (CONFIG.cardLabels[i] || '');
    }

    function setIndex(i, silent) {
        index = i;
        dots.forEach(function (d, n) {
            if (n === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
        });
        if (!silent) announce(i);
    }

    function goTo(i, opts) {
        opts = opts || {};
        var n = slides.length;
        i = ((i % n) + n) % n;
        track$.scrollTo({ left: i * track$.clientWidth, behavior: (opts.instant || reducedMotion.matches) ? 'auto' : 'smooth' });
        setIndex(i, opts.silent);
        if (!opts.silent) track('card', { index: i });
    }

    // Native scroll-snap gives momentum + snapping on touch; we just sync the dots
    var rafId = 0;
    track$.addEventListener('scroll', function () {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
            var i = clamp(Math.round(track$.scrollLeft / track$.clientWidth), 0, slides.length - 1);
            if (i !== index) setIndex(i);
        });
    }, { passive: true });

    $('#prevBtn').addEventListener('click', function () { goTo(index - 1); });
    $('#nextBtn').addEventListener('click', function () { goTo(index + 1); });
    dots.forEach(function (d) {
        d.addEventListener('click', function () { goTo(Number(d.dataset.index)); });
    });

    track$.addEventListener('keydown', function (e) {
        var map = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: slides.length - 1 };
        if (e.key in map) { e.preventDefault(); goTo(map[e.key]); }
    });

    // Mouse drag (touch & pen already scroll natively)
    var drag = null;
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
        drag = null;
        track$.classList.remove('is-dragging');
        goTo(target);
    }
    track$.addEventListener('pointerup', endDrag);
    track$.addEventListener('pointercancel', endDrag);

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

    /* ---------- 6. ACTIONS: calendar · share · map · rsvp · music ---------- */
    var toastTimer = 0;
    function toast(message) {
        toastEl.textContent = message;
        toastEl.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toastEl.classList.remove('is-visible'); }, 2600);
    }

    var compact = function (s) { return s.replace(/[-:]/g, ''); };
    function nextDay(ymd) {
        var d = new Date(ymd + 'T00:00:00Z');
        d.setUTCDate(d.getUTCDate() + 1);
        return d.toISOString().slice(0, 10);
    }
    function eventTimes() {
        if (CONFIG.allDay || !CONFIG.startTime) {
            return { allDay: true, start: CONFIG.date, end: nextDay(CONFIG.date) };
        }
        return { allDay: false, start: CONFIG.date + 'T' + CONFIG.startTime + ':00', end: CONFIG.date + 'T' + CONFIG.endTime + ':00' };
    }
    var locationText = [CONFIG.venue, CONFIG.address].filter(Boolean).join(', ');

    function googleCalUrl() {
        var t = eventTimes();
        var p = new URLSearchParams({
            action: 'TEMPLATE',
            text: CONFIG.eventTitle,
            dates: compact(t.start) + '/' + compact(t.end),
            details: CONFIG.description,
            location: locationText
        });
        if (!t.allDay) p.set('ctz', CONFIG.timeZone);
        return 'https://calendar.google.com/calendar/render?' + p.toString();
    }

    function outlookCalUrl() {
        var t = eventTimes();
        var p = new URLSearchParams({
            path: '/calendar/action/compose',
            rru: 'addevent',
            subject: CONFIG.eventTitle,
            startdt: t.start,
            enddt: t.end,
            body: CONFIG.description,
            location: locationText
        });
        if (t.allDay) p.set('allday', 'true');
        return 'https://outlook.live.com/calendar/0/deeplink/compose?' + p.toString();
    }

    function buildICS() {
        var t = eventTimes();
        var esc = function (s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); };
        var stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
        return [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Zumi and Morgan//Wedding Invitation//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            'UID:wedding-' + compact(CONFIG.date) + '@zumicuji.github.io',
            'DTSTAMP:' + stamp,
            t.allDay ? 'DTSTART;VALUE=DATE:' + compact(t.start) : 'DTSTART:' + compact(t.start),
            t.allDay ? 'DTEND;VALUE=DATE:' + compact(t.end) : 'DTEND:' + compact(t.end),
            'SUMMARY:' + esc(CONFIG.eventTitle),
            'LOCATION:' + esc(locationText),
            'DESCRIPTION:' + esc(CONFIG.description),
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');
    }

    function downloadICS() {
        var blob = new Blob([buildICS()], { type: 'text/calendar;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'zumi-and-morgan-wedding.ics';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
        track('calendar', { type: 'ics' });
    }

    var calBtn = $('#calBtn');
    var calMenu = $('#calMenu');
    function closeMenu() {
        calMenu.hidden = true;
        calBtn.setAttribute('aria-expanded', 'false');
    }
    function toggleMenu() {
        var open = calMenu.hidden;
        calMenu.hidden = !open;
        calBtn.setAttribute('aria-expanded', String(open));
        if (open) calMenu.querySelector('a, button').focus();
    }
    calBtn.addEventListener('click', toggleMenu);
    document.addEventListener('click', function (e) {
        if (!calMenu.hidden && !e.target.closest('#calMenu, #calBtn')) closeMenu();
    });
    calMenu.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeMenu(); calBtn.focus(); }
    });
    $('#icsBtn').addEventListener('click', function () { downloadICS(); closeMenu(); });
    var gLink = $('#gcalLink');
    var oLink = $('#outlookLink');
    gLink.href = googleCalUrl();
    oLink.href = outlookCalUrl();
    gLink.addEventListener('click', function () { track('calendar', { type: 'google' }); closeMenu(); });
    oLink.addEventListener('click', function () { track('calendar', { type: 'outlook' }); closeMenu(); });

    // Map / RSVP
    $('#mapLink').href = CONFIG.mapUrl || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(locationText));
    if (CONFIG.rsvpUrl) {
        var rsvp = $('#rsvpLink');
        rsvp.href = CONFIG.rsvpUrl;
        rsvp.hidden = false;
        rsvp.addEventListener('click', function () { track('rsvp'); });
    }

    // Share (Web Share API → clipboard → prompt)
    $('#shareBtn').addEventListener('click', async function () {
        var data = { title: document.title, text: 'You are invited to the wedding of Zumi & Morgan', url: CONFIG.shareUrl };
        track('share');
        try {
            if (navigator.share) { await navigator.share(data); return; }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(data.url);
                toast('Link copied');
                return;
            }
            window.prompt('Copy this link:', data.url);
        } catch (e) {
            if (e && e.name !== 'AbortError') window.prompt('Copy this link:', data.url);
        }
    });

    $('#replayBtn').addEventListener('click', replay);

    // Music: off by default, never autoplays, only exists if CONFIG.musicSrc is set
    if (CONFIG.musicSrc) {
        var audio = null;
        var musicBtn = $('#musicBtn');
        musicBtn.hidden = false;
        musicBtn.addEventListener('click', function () {
            if (!audio) { audio = new Audio(CONFIG.musicSrc); audio.loop = true; audio.volume = 0.4; }
            var turnOn = musicBtn.getAttribute('aria-pressed') !== 'true';
            if (turnOn) {
                audio.play().then(function () { musicBtn.setAttribute('aria-pressed', 'true'); })
                    .catch(function () { toast('Could not play music'); });
            } else {
                audio.pause();
                musicBtn.setAttribute('aria-pressed', 'false');
            }
            track('music', { on: turnOn });
        });
    }

    /* ---------- 7. INIT ---------- */
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
