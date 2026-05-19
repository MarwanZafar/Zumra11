import { smartReveal } from './reveal.js';

export function initRoadmap() {
  const section = document.getElementById('roadmap');
  if (!section) return;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  const header = document.querySelector('.rm-section__header');
  const journey = document.querySelector('.rm-journey');

  gsap.set('.rm-section__header > *', { opacity: 0, y: 24 });
  gsap.set('.rm-journey__ribbon', { opacity: 0, y: 20 });
  gsap.set('.rm-circle', { opacity: 0, scale: 0.7 });
  gsap.set('.rm-label', { opacity: 0, y: 16 });

  ScrollTrigger.create({
    trigger: '.rm-section__header',
    start: 'top 92%',
    once: true,
    onEnter: () => smartReveal(header || section,
      () => gsap.to('.rm-section__header > *',
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
      ),
      () => gsap.set('.rm-section__header > *', { opacity: 1, y: 0 })
    ),
  });

  ScrollTrigger.create({
    trigger: '.rm-journey',
    start: 'top 92%',
    once: true,
    onEnter: () => smartReveal(journey || section,
      () => {
        gsap.to('.rm-journey__ribbon',
          { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }
        );
        gsap.to('.rm-circle',
          { opacity: 1, scale: 1, duration: 0.7, stagger: 0.16, ease: 'back.out(1.6)', delay: 0.3 }
        );
        gsap.to('.rm-label',
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.16, ease: 'power3.out', delay: 0.5 }
        );
      },
      () => {
        gsap.set('.rm-journey__ribbon', { opacity: 1, y: 0 });
        gsap.set('.rm-circle', { opacity: 1, scale: 1 });
        gsap.set('.rm-label', { opacity: 1, y: 0 });
      }
    ),
  });

  // Hover sync: hovering a label highlights the matching circle, and vice versa
  const circles = section.querySelectorAll('.rm-circle');
  const labels = section.querySelectorAll('.rm-label');

  const setActive = (step) => {
    circles.forEach((c) => c.classList.toggle('is-active', c.dataset.step === step));
    labels.forEach((l) => l.classList.toggle('is-active', l.dataset.step === step));
  };
  const clearActive = () => {
    circles.forEach((c) => c.classList.remove('is-active'));
    labels.forEach((l) => l.classList.remove('is-active'));
  };

  [...circles, ...labels].forEach((el) => {
    el.addEventListener('mouseenter', () => setActive(el.dataset.step));
    el.addEventListener('mouseleave', clearActive);
  });
}
