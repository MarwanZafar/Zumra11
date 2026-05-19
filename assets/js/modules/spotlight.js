import { smartReveal } from './reveal.js';

export function initSpotlight({ reducedMotion = false } = {}) {
  const section = document.getElementById('spotlight');
  if (!section) return;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  const wordInners = section.querySelectorAll('.spotlight__word-inner');
  if (!wordInners.length) return;

  if (reducedMotion) {
    gsap.set(wordInners, { y: '0%' });
    return;
  }

  // Initial hidden state — prevents the visible→hidden→fade flash on trigger
  gsap.set(wordInners, { y: '110%' });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 92%',
    once: true,
    onEnter: () => smartReveal(section,
      () => gsap.to(wordInners,
        { y: '0%', duration: 0.9, stagger: 0.12, ease: 'power4.out' }
      ),
      () => gsap.set(wordInners, { y: '0%' })
    ),
  });
}
