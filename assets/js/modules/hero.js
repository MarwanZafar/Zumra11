function initHeroParallax(hero) {
  const gsap = window.gsap;
  const photoImg = hero.querySelector('.hero__photo img');
  const glowTerra = hero.querySelector('.hero__bg-glow--terra');
  const glowTeal = hero.querySelector('.hero__bg-glow--teal');
  const glowAmber = hero.querySelector('.hero__bg-glow--amber');
  const content = hero.querySelector('.hero__content');

  const setPhotoX = photoImg ? gsap.quickTo(photoImg, 'x', { duration: 1.2, ease: 'power2.out' }) : null;
  const setPhotoY = photoImg ? gsap.quickTo(photoImg, 'y', { duration: 1.2, ease: 'power2.out' }) : null;
  const setTerraX = glowTerra ? gsap.quickTo(glowTerra, 'x', { duration: 1.2, ease: 'power2.out' }) : null;
  const setTealX = glowTeal ? gsap.quickTo(glowTeal, 'x', { duration: 1.2, ease: 'power2.out' }) : null;
  const setAmberX = glowAmber ? gsap.quickTo(glowAmber, 'x', { duration: 1.2, ease: 'power2.out' }) : null;
  const setContentX = content ? gsap.quickTo(content, 'x', { duration: 0.8, ease: 'power3.out' }) : null;
  const setContentY = content ? gsap.quickTo(content, 'y', { duration: 0.8, ease: 'power3.out' }) : null;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    if (setPhotoX) setPhotoX(xPct * -15);
    if (setPhotoY) setPhotoY(yPct * -10);
    if (setTerraX) setTerraX(xPct * -40);
    if (setTealX) setTealX(xPct * -30);
    if (setAmberX) setAmberX(xPct * 25);
    if (setContentX) setContentX(xPct * 6);
    if (setContentY) setContentY(yPct * 4);
  });

  hero.addEventListener('mouseleave', () => {
    if (setPhotoX) setPhotoX(0);
    if (setPhotoY) setPhotoY(0);
    if (setTerraX) setTerraX(0);
    if (setTealX) setTealX(0);
    if (setAmberX) setAmberX(0);
    if (setContentX) setContentX(0);
    if (setContentY) setContentY(0);
  });
}

function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const count = window.matchMedia('(max-width: 768px)').matches ? 14 : 28;
  const colors = [
    'rgba(13, 91, 90, 0.7)',
    'rgba(13, 91, 90, 0.7)',
    'rgba(13, 91, 90, 0.5)',
    'rgba(196, 106, 54, 0.55)',
    'rgba(217, 145, 9, 0.45)',
    'rgba(13, 91, 90, 0.5)',
    'rgba(255, 255, 255, 0.3)',
  ];

  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 1.5 + Math.random() * 3;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = 8 + Math.random() * 8;
    const delay = Math.random() * 6;
    const opacity = 0.3 + Math.random() * 0.5;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${left}%;
      top: ${top}%;
      opacity: ${opacity};
      box-shadow: 0 0 ${size * 3}px ${color};
      animation: heroParticleFloat ${duration}s ease-in-out infinite;
      animation-delay: -${delay}s;
    `;
    container.appendChild(p);
  }
}

function bindMagneticButtons() {
  const gsap = window.gsap;
  document.querySelectorAll('.btn-primary').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
      gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.5)' });
    });
  });
}

function bindCTAStubs(hero) {
  hero.querySelectorAll('[data-action]').forEach((b) => {
    b.addEventListener('click', () => {
      const action = b.dataset.action;
      if (action === 'register') {
        const target = document.getElementById('register');
        if (target && window.lenis) {
          window.lenis.scrollTo(target, { offset: 0, duration: 1.4 });
        }
      }
    });
  });
}

export function initHero({ reducedMotion = false, supportsHover = false } = {}) {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const gsap = window.gsap;
  const eyebrow = hero.querySelector('.eyebrow');
  const words = hero.querySelectorAll('.hero__word-inner');
  const divider = hero.querySelector('.hero__divider');
  const subAr = hero.querySelector('.hero__sub-ar');
  const body = hero.querySelector('.hero__body');
  const ctaRow = hero.querySelector('.hero__cta-row');
  const quote = hero.querySelector('.hero__quote');
  const scrollInd = hero.querySelector('.hero__scroll-indicator');

  bindCTAStubs(hero);

  // Particles (skipped automatically in reduced-motion)
  initHeroParticles();

  if (reducedMotion) {
    gsap.set(words, { y: 0 });
    gsap.set([eyebrow, subAr, body, ctaRow, quote, scrollInd], { opacity: 1, y: 0, x: 0 });
    gsap.set(divider, { scaleX: 1 });
    return;
  }

  gsap.fromTo(eyebrow,
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 });

  gsap.to(words, {
    y: 0,
    duration: 0.9,
    ease: 'power4.out',
    stagger: 0.12,
    delay: 0.3,
  });

  gsap.to(divider, {
    scaleX: 1,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.85,
  });

  gsap.fromTo(subAr,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.95 });

  gsap.to(body, { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.1 });

  gsap.fromTo(ctaRow,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 1.3 });

  gsap.to(quote, { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.55 });

  gsap.to(scrollInd, {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    delay: 1.8,
    onComplete: () => {
      gsap.to(scrollInd, {
        y: 6,
        duration: 1.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    },
  });

  if (supportsHover) {
    bindMagneticButtons();
    initHeroParallax(hero);
  }
}
