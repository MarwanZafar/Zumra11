function initImmersiveHover() {
  const band = document.querySelector('.spaces-band');
  if (!band) return;

  // Skip the entire immersive feature on touch devices —
  // mobile users want a clean static card list, not a tappable swap.
  const isTouch = !window.matchMedia('(hover: hover)').matches;
  if (isTouch) return;

  const tiles = band.querySelector('.spaces-band__tiles');
  if (!tiles) return;
  const cards = band.querySelectorAll('.space-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      const tile = card.dataset.tile;
      if (!tile) return;
      band.dataset.active = tile;
      band.classList.add('is-immersive');
    });
  });

  tiles.addEventListener('mouseleave', () => {
    band.classList.remove('is-immersive');
  });
}

import { smartReveal } from './reveal.js';

export function initSpaces() {
  const section = document.getElementById('spaces');
  if (!section) return;

  initImmersiveHover();

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  const header = document.querySelector('.spaces-band__header');
  const tiles = document.querySelector('.spaces-band__tiles');

  gsap.set('.spaces-band__header > *', { opacity: 0, y: 24 });
  gsap.set('.space-card', { opacity: 0, y: 40, scale: 0.96 });

  ScrollTrigger.create({
    trigger: '.spaces-band__header',
    start: 'top 92%',
    once: true,
    onEnter: () => smartReveal(header || section,
      () => gsap.to('.spaces-band__header > *',
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
      ),
      () => gsap.set('.spaces-band__header > *', { opacity: 1, y: 0 })
    ),
  });

  ScrollTrigger.create({
    trigger: '.spaces-band__tiles',
    start: 'top 92%',
    once: true,
    onEnter: () => smartReveal(tiles || section,
      () => gsap.to('.space-card',
        { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out' }
      ),
      () => gsap.set('.space-card', { opacity: 1, y: 0, scale: 1 })
    ),
  });
}
