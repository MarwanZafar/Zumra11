import { smartReveal } from './reveal.js';

export function initSpotlightFeatures() {
  const cards = document.querySelectorAll('.feature-3d');
  if (!cards.length) return;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
    return;
  }

  gsap.set(cards, { opacity: 0, y: 50, scale: 0.94 });

  const grid = document.querySelector('.features-grid');

  ScrollTrigger.create({
    trigger: '.features-grid',
    start: 'top 92%',
    once: true,
    onEnter: () => smartReveal(grid,
      () => gsap.to(cards, {
        opacity: 1, y: 0, scale: 1,
        duration: 0.9, stagger: 0.12,
        ease: 'power3.out',
      }),
      () => gsap.set(cards, { opacity: 1, y: 0, scale: 1 })
    ),
  });

  const canTilt =
    matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !reducedMotion;
  if (!canTilt) return;

  cards.forEach((card) => {
    const surface = card.querySelector('.feature-3d__surface');
    const scene = card.querySelector('.feature-3d__scene');
    if (!surface || !scene) return;

    const rotXSurf = gsap.quickTo(surface, 'rotationX', { duration: 0.5, ease: 'power2.out' });
    const rotYSurf = gsap.quickTo(surface, 'rotationY', { duration: 0.5, ease: 'power2.out' });
    const rotXScene = gsap.quickTo(scene, 'rotationX', { duration: 0.6, ease: 'power2.out' });
    const rotYScene = gsap.quickTo(scene, 'rotationY', { duration: 0.6, ease: 'power2.out' });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;
      rotYSurf(xPct * 10);
      rotXSurf(yPct * -10);
      rotYScene(xPct * 18);
      rotXScene(yPct * -18);
    });

    card.addEventListener('mouseleave', () => {
      rotXSurf(0); rotYSurf(0); rotXScene(0); rotYScene(0);
    });
  });
}
