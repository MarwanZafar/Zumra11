import { smartReveal } from './reveal.js';

export function initPrograms() {
  const section = document.getElementById('programs');
  if (!section) return;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  const bento = section.querySelector('.programs__bento');

  // Hide initial state up front so there's no "visible → flash hidden → fade in" pop
  gsap.set('.programs__title', { opacity: 0, y: 30 });
  gsap.set('.programs__subtitle', { opacity: 0, y: 20 });
  gsap.set('.prog-card', { opacity: 0, y: 36, scale: 0.97 });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 92%',
    once: true,
    onEnter: () => smartReveal(section,
      () => {
        gsap.to('.programs__title',
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
        gsap.to('.programs__subtitle',
          { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: 'power3.out' });
      },
      () => {
        gsap.set('.programs__title', { opacity: 1, y: 0 });
        gsap.set('.programs__subtitle', { opacity: 1, y: 0 });
      }
    ),
  });

  ScrollTrigger.create({
    trigger: '.programs__bento',
    start: 'top 92%',
    once: true,
    onEnter: () => smartReveal(bento || section,
      () => {
        gsap.to('.prog-card',
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' });
      },
      () => {
        gsap.set('.prog-card', { opacity: 1, y: 0, scale: 1 });
      }
    ),
  });
}
