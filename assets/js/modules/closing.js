import { smartReveal } from './reveal.js';

export function initClosing() {
  const section = document.getElementById('closing');
  if (!section) return;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const wordInners = section.querySelectorAll('.closing__word-inner');

  // Hide initial state once, before any scroll trigger, to avoid the
  // "visible -> snap hidden -> fade in" flash when onEnter fires.
  gsap.set('.closing .eyebrow', { opacity: 0, x: -20 });
  gsap.set(wordInners, { yPercent: 110, opacity: 0 });
  gsap.set('.closing__body', { opacity: 0, y: 20 });
  gsap.set('.closing__cta-wrap', { opacity: 0, y: 16, scale: 0.95 });
  gsap.set('.closing__divider', { scaleX: 0, transformOrigin: 'center' });
  gsap.set('.closing__audience-item, .closing__audience-dot', { opacity: 0, y: 12 });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 90%',
    once: true,
    onEnter: () => {
      smartReveal(section,
        // Animated reveal
        () => {
          const tl = gsap.timeline();

          tl.to('.closing .eyebrow',
            { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, 0);

          tl.to(wordInners,
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.08,
              ease: 'power4.out',
            }, 0.3);

          tl.to('.closing__body',
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 1.4);

          tl.to('.closing__cta-wrap',
            { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.5)' }, 1.65);

          tl.to('.closing__divider',
            { scaleX: 1, duration: 0.7, ease: 'power2.out' }, 1.9);

          tl.to('.closing__audience-item, .closing__audience-dot',
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' }, 2.05);
        },
        // Instant final state (fast scroll / already past)
        () => {
          gsap.set('.closing .eyebrow', { opacity: 1, x: 0 });
          gsap.set(wordInners, { yPercent: 0, opacity: 1 });
          gsap.set('.closing__body', { opacity: 1, y: 0 });
          gsap.set('.closing__cta-wrap', { opacity: 1, y: 0, scale: 1 });
          gsap.set('.closing__divider', { scaleX: 1, transformOrigin: 'center' });
          gsap.set('.closing__audience-item, .closing__audience-dot', { opacity: 1, y: 0 });
        }
      );
    },
  });
}
