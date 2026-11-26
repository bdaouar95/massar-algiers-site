/* Massar Study : animations de la page Études (GSAP + ScrollTrigger + SplitText, défilement fluide Lenis).
   Appelé par etudes.js après chaque rendu (window.MASSAR_ANIM). Respecte « réduire les animations » du téléphone. */

(function () {
  var mm = null, lenis = null, rotTimer = null, ecouteurs = [];
  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)');
  var souris = window.matchMedia('(pointer: fine)');

  function formate(v) { return Math.round(v).toLocaleString('fr-FR').replace(/[ \s]/g, ' '); }
  function ecoute(el, ev, fn) { el.addEventListener(ev, fn); ecouteurs.push([el, ev, fn]); }
  function nettoie() {
    ecouteurs.forEach(function (e) { e[0].removeEventListener(e[1], e[2]); });
    ecouteurs = [];
    if (rotTimer) { rotTimer.kill(); rotTimer = null; }
    document.documentElement.classList.remove('hs-actif');
  }

  function compteurs() {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var fin = +el.getAttribute('data-count');
      if (reduit.matches || !window.gsap) { el.textContent = formate(fin); return; }
      var o = { v: 0 };
      el.textContent = formate(0);
      gsap.to(o, { v: fin, duration: 2.2, ease: 'power2.out', onUpdate: function () { el.textContent = formate(o.v); },
        scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
    });
  }

  // Le pays du titre change en boucle
  function rotation() {
    var mots = gsap.utils.toArray('.rot > span');
    if (mots.length < 2) return;
    gsap.set(mots, { autoAlpha: 0, yPercent: 100 });
    gsap.set(mots[0], { autoAlpha: 1, yPercent: 0 });
    var i = 0;
    rotTimer = gsap.delayedCall(2.4, function suivant() {
      var a = mots[i], b = mots[(i + 1) % mots.length];
      gsap.to(a, { yPercent: -100, autoAlpha: 0, duration: 0.6, ease: 'power3.in' });
      gsap.fromTo(b, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', delay: 0.35 });
      i = (i + 1) % mots.length;
      rotTimer = gsap.delayedCall(2.4, suivant);
    });
  }

  // Effets à la souris (ordinateur seulement)
  function effetsSouris() {
    // Boutons magnétiques
    document.querySelectorAll('.btn, .btn-split, .wa-float').forEach(function (b) {
      var xTo = gsap.quickTo(b, 'x', { duration: 0.4, ease: 'power3' }), yTo = gsap.quickTo(b, 'y', { duration: 0.4, ease: 'power3' });
      ecoute(b, 'mousemove', function (e) { var r = b.getBoundingClientRect(); xTo((e.clientX - r.left - r.width / 2) * 0.3); yTo((e.clientY - r.top - r.height / 2) * 0.4); });
      ecoute(b, 'mouseleave', function () { gsap.to(b, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' }); });
    });
    // Cartes pays inclinées en 3D
    document.querySelectorAll('.pays').forEach(function (c) {
      var rx = gsap.quickTo(c, 'rotationX', { duration: 0.5, ease: 'power3' }), ry = gsap.quickTo(c, 'rotationY', { duration: 0.5, ease: 'power3' });
      gsap.set(c, { transformPerspective: 900 });
      ecoute(c, 'mousemove', function (e) { var r = c.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - 0.5) * 10); rx(-((e.clientY - r.top) / r.height - 0.5) * 8); });
      ecoute(c, 'mouseleave', function () { rx(0); ry(0); });
    });
    // Halo doré qui suit la souris sur les services
    document.querySelectorAll('.serv').forEach(function (c) {
      ecoute(c, 'mousemove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
    });
  }

  function init() {
    if (!window.gsap || !window.ScrollTrigger) { compteurs(); return; }
    gsap.registerPlugin(ScrollTrigger);
    if (window.SplitText) gsap.registerPlugin(SplitText);
    nettoie();
    if (mm) mm.revert();
    ScrollTrigger.getAll().forEach(function (t) { t.kill(); });
    mm = gsap.matchMedia();

    // 1. Le seul épinglage de la page en premier : « Comment ça marche » à l'horizontale (grand écran)
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', function () {
      var section = document.querySelector('#etapes'), piste = section && section.querySelector('.etapes');
      if (!piste) return;
      document.documentElement.classList.add('hs-actif');
      var rtl = document.documentElement.dir === 'rtl';
      var distance = function () { return Math.max(0, piste.scrollWidth - section.clientWidth + 48); };
      var tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top top', end: function () { return '+=' + distance(); }, pin: true, pinSpacing: true, scrub: 1, invalidateOnRefresh: true } });
      tl.to(piste, { x: function () { return (rtl ? 1 : -1) * distance(); }, ease: 'none' }, 0)
        .fromTo('.e-ligne span', { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0);
      return function () { document.documentElement.classList.remove('hs-actif'); };
    });

    mm.add('(prefers-reduced-motion: no-preference)', function () {
      // Barre de progression
      gsap.to('.e-progress span', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

      // Haut de page
      gsap.from('.e-hero h1 .ln-in', { yPercent: 115, duration: 1.2, ease: 'expo.out', stagger: 0.12, delay: 0.15 });
      gsap.from('.e-hero .hero-sub, .e-hero .hero-btns', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.55 });
      gsap.from('.e-preuve', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.75 });
      gsap.from('.e-engag > div', { y: 30, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.95 });
      gsap.fromTo('.e-hero-photo img', { scale: 1.18 }, { scale: 1, duration: 2.6, ease: 'power2.out' });
      gsap.to('.e-hero-photo', { yPercent: 16, ease: 'none', scrollTrigger: { trigger: '.e-hero', start: 'top top', end: 'bottom top', scrub: true } });
      rotation();

      // Grands titres mot par mot
      gsap.utils.toArray('.card .h2, .reserver > h2, .e-stats-titre').forEach(function (el) {
        if (window.SplitText) {
          var sp = SplitText.create(el, { type: 'words', mask: 'words', wordDelimiter: ' ', ignore: '.nw' });
          gsap.from(sp.words, { yPercent: 110, duration: 0.9, ease: 'expo.out', stagger: 0.05, scrollTrigger: { trigger: el, start: 'top 88%' } });
        } else {
          gsap.from(el, { y: 50, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
        }
      });

      // Cartes pays : cascade, photos qui se dévoilent puis bougent en profondeur
      ScrollTrigger.batch('.pays', { start: 'top 90%', once: true,
        onEnter: function (b) { gsap.from(b, { y: 90, opacity: 0, duration: 1.1, stagger: 0.1, ease: 'power3.out' }); } });
      gsap.utils.toArray('.pays-img').forEach(function (box) {
        gsap.from(box, { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.2, ease: 'expo.inOut', scrollTrigger: { trigger: box, start: 'top 90%' } });
        gsap.fromTo(box.querySelector('img'), { yPercent: -7, scale: 1.16 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      // Blocs qui apparaissent
      ScrollTrigger.batch('.e-stat, .serv, .pack, .e-faq details', { start: 'top 90%', once: true,
        onEnter: function (b) { gsap.from(b, { y: 60, opacity: 0, scale: 0.97, duration: 0.9, stagger: 0.08, ease: 'power3.out' }); } });

      // Ligne des étapes (petits écrans, sans épinglage)
      if (!document.documentElement.classList.contains('hs-actif')) {
        gsap.fromTo('.e-ligne span', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.etapes', start: 'top 80%', end: 'bottom 55%', scrub: true } });
        ScrollTrigger.batch('.etapes > div', { start: 'top 90%', once: true,
          onEnter: function (b) { gsap.from(b, { y: 50, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }); } });
      }

      // Fonds photo qui glissent doucement
      gsap.utils.toArray('.card-dark.e-offre, .card-dark#diagnostic').forEach(function (sec) {
        gsap.fromTo(sec, { backgroundPositionY: '0%' }, { backgroundPositionY: '100%', ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      if (souris.matches) effetsSouris();
    });

    compteurs();

    // Défilement fluide (une seule instance)
    if (window.Lenis && !lenis && !reduit.matches) {
      lenis = new Lenis({ lerp: 0.1 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      document.addEventListener('click', function (e) {
        var a = e.target.closest('a[href^="#"]');
        if (!a || a.getAttribute('href').length < 2) return;
        var cible = document.querySelector(a.getAttribute('href'));
        if (cible) { e.preventDefault(); lenis.scrollTo(cible, { offset: -12 }); }
      });
    }
    window.addEventListener('load', function () { ScrollTrigger.refresh(); }, { once: true });
  }

  window.MASSAR_ANIM = init;
})();
