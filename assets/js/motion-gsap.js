/* =========================================================
   V45 - Motion layer con GSAP
   Logos del index, botellas, catálogos, carruseles y transición visual.
   Fallback limpio si GSAP no carga.
========================================================= */
(function(){
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = () => Boolean(window.gsap) && !reduceMotion;
  const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

  function initPageFade(){
    if(!hasGsap()) return;
    const gsap = window.gsap;
    gsap.fromTo(document.body, { autoAlpha: .001 }, { autoAlpha: 1, duration: .55, ease: 'power2.out' });
    qsa('.navbar-maison, .page-hero h1, .page-hero p, .catalog-toolbar, .company-logo-hero, .company-carousel-section').forEach((el, i) => {
      if(el.dataset.motionPage === 'true') return;
      el.dataset.motionPage = 'true';
      gsap.from(el, { autoAlpha: 0, y: 24, duration: .75, ease: 'power3.out', delay: Math.min(i * .055, .25) });
    });
  }

  function initEntryLogos(){
    const cards = qsa('.company-entry-card');
    if(!cards.length || !hasGsap()) return;
    const gsap = window.gsap;

    gsap.set('.company-entry-inner', { autoAlpha: 0, y: 28, scale: .96, rotateX: 3 });
    gsap.to('.company-entry-inner', {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 1.05,
      ease: 'power3.out',
      stagger: .16,
      delay: .08
    });

    qsa('.company-entry-logo').forEach((logo, index) => {
      if(logo.dataset.motionLogo === 'true') return;
      logo.dataset.motionLogo = 'true';
      gsap.to(logo, {
        y: index % 2 ? -13 : -10,
        rotation: index % 2 ? .75 : -.75,
        duration: 3.4 + index * .35,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });
    });

    qsa('.company-entry-bodegas span').forEach((chip, index) => {
      gsap.from(chip, {
        autoAlpha: 0,
        y: 14,
        scale: .88,
        duration: .68,
        ease: 'back.out(1.7)',
        delay: .45 + index * .045
      });
      gsap.to(chip, {
        y: -3,
        duration: 2.5 + (index % 3) * .3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: .8 + index * .08
      });
    });

    cards.forEach(card => {
      const logo = card.querySelector('.company-entry-logo');
      const stage = card.querySelector('.company-entry-logo-stage');
      const chips = qsa('.company-entry-bodegas span', card);
      let bounds = null;

      card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect();
        gsap.to(card, { '--entry-glow-opacity': 1, duration: .35, ease: 'power2.out' });
        gsap.to(chips, { y: -6, scale: 1.035, duration: .32, ease: 'power2.out', stagger: .025 });
        gsap.to(stage, { scale: 1.025, duration: .45, ease: 'power3.out' });
      });

      card.addEventListener('mousemove', event => {
        bounds = bounds || card.getBoundingClientRect();
        const px = (event.clientX - bounds.left) / bounds.width - .5;
        const py = (event.clientY - bounds.top) / bounds.height - .5;
        gsap.to(logo, {
          x: px * 28,
          y: py * 18,
          rotationY: px * 9,
          rotationX: py * -8,
          transformPerspective: 950,
          duration: .42,
          ease: 'power3.out'
        });
        gsap.to(card, {
          '--entry-x': `${(px + .5) * 100}%`,
          '--entry-y': `${(py + .5) * 100}%`,
          duration: .3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        bounds = null;
        gsap.to(logo, { x: 0, y: 0, rotationX: 0, rotationY: 0, duration: .75, ease: 'elastic.out(1,.55)' });
        gsap.to(stage, { scale: 1, duration: .45, ease: 'power2.out' });
        gsap.to(chips, { y: 0, scale: 1, duration: .35, ease: 'power2.out', stagger: .02 });
        gsap.to(card, { '--entry-glow-opacity': 0, duration: .35, ease: 'power2.out' });
      });
    });
  }

  function animateBottleImage(img){
    if(!img || img.dataset.motionBottle === 'true' || !hasGsap()) return;
    img.dataset.motionBottle = 'true';
    const gsap = window.gsap;
    gsap.set(img, { transformOrigin: '50% 82%' });

    gsap.from(img, {
      autoAlpha: 0,
      y: 24,
      scale: .94,
      duration: .85,
      ease: 'power3.out',
      delay: Math.random() * .22
    });

    const floatTween = gsap.to(img, {
      y: -7,
      duration: 2.8 + Math.random() * .8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: Math.random() * .45
    });

    // Importante: nunca animar el transform de .company-carousel-card.
    // El carrusel posiciona sus tarjetas con transform inline; si GSAP pisa ese transform,
    // la tarjeta activa se desplaza y se corta hacia los lados.
    const carouselCard = img.closest('.company-carousel-card');
    const holder = carouselCard
      ? (img.closest('.company-carousel-image') || img.parentElement)
      : (img.closest('.company-wine-card, .product-card') || img.parentElement);
    if(!holder) return;

    holder.addEventListener('mouseenter', () => {
      floatTween.pause();
      if(!carouselCard){
        gsap.to(holder, { scale: 1.012, duration: .35, ease: 'power2.out' });
      }
      gsap.to(img, { y: -16, scale: 1.065, rotation: .8, duration: .55, ease: 'power3.out' });
    });

    holder.addEventListener('mousemove', event => {
      const rect = holder.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - .5;
      const py = (event.clientY - rect.top) / rect.height - .5;
      gsap.to(img, { x: px * 13, y: -16 + py * 8, rotation: px * 3, duration: .42, ease: 'power3.out' });
    });

    holder.addEventListener('mouseleave', () => {
      if(!carouselCard){
        gsap.to(holder, { scale: 1, duration: .35, ease: 'power2.out' });
      }
      gsap.to(img, { x: 0, y: 0, scale: 1, rotation: 0, duration: .7, ease: 'elastic.out(1,.55)', onComplete: () => floatTween.resume() });
    });
  }

  function initBottleMotion(root = document){
    if(!hasGsap()) return;
    const selectors = ['.company-wine-media img', '.product-img-wrap img', '.company-carousel-image img', '#productModal .product-detail-img img'];
    qsa(selectors.join(','), root).forEach(animateBottleImage);
  }

  function revealProductCards(root = document){
    if(!hasGsap()) return;
    const gsap = window.gsap;
    qsa('.company-wine-card:not([data-motion-revealed]), .product-card:not([data-motion-revealed])', root).forEach((card, index) => {
      card.dataset.motionRevealed = 'true';
      gsap.fromTo(card,
        { autoAlpha: 0, y: 38, scale: .965 },
        { autoAlpha: 1, y: 0, scale: 1, duration: .76, ease: 'power3.out', delay: Math.min(index * .045, .38) }
      );
    });
  }

  function initFilterMotion(){
    if(!hasGsap()) return;
    const gsap = window.gsap;
    qsa('.filter-btn, .company-chip, .lux-select-trigger, .company-search, .form-control').forEach((el, i) => {
      if(el.dataset.motionFilter === 'true') return;
      el.dataset.motionFilter = 'true';
      gsap.from(el, { autoAlpha: 0, y: 10, duration: .55, ease: 'power2.out', delay: Math.min(i * .025, .28) });
    });
  }

  function initCarouselMotion(){
    const carousel = document.querySelector('[data-company-carousel]');
    if(!carousel || !hasGsap()) return;
    const gsap = window.gsap;

    const pulseActive = () => {
      const active = carousel.querySelector('.company-carousel-card.is-active .company-carousel-image img');
      if(active){
        gsap.fromTo(active, { scale: .985, y: 6 }, { scale: 1.035, y: -4, duration: .95, ease: 'power2.out', yoyo: true, repeat: 1 });
      }
    };

    const observer = new MutationObserver(() => {
      initBottleMotion(carousel);
      pulseActive();
    });
    observer.observe(carousel, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'style'] });
    setTimeout(pulseActive, 420);
  }

  function initMutationObserver(){
    if(!hasGsap()) return;
    const pending = new Set();
    let raf = 0;
    const run = () => {
      raf = 0;
      pending.forEach(root => {
        initBottleMotion(root);
        revealProductCards(root);
        initFilterMotion();
      });
      pending.clear();
    };
    const observer = new MutationObserver(mutations => {
      mutations.forEach(m => m.addedNodes.forEach(node => { if(node.nodeType === 1) pending.add(node); }));
      if(!raf) raf = requestAnimationFrame(run);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function init(){
    if(!hasGsap()) return;
    initPageFade();
    initEntryLogos();
    initFilterMotion();
    initBottleMotion();
    revealProductCards();
    initCarouselMotion();
    initMutationObserver();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.addEventListener('layout:ready', () => setTimeout(init, 120));
})();
