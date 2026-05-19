import { initLoader } from './modules/loader.js';
import { initNav } from './modules/nav.js';
import { initAnimations } from './modules/animations.js';
import { initHero } from './modules/hero.js';
import { initAmbientParticles } from './modules/particles.js';
import { initSpotlight } from './modules/spotlight.js';
import { initSpotlightFeatures } from './modules/spotlight-features.js';
import { initSpaces } from './modules/spaces.js';
import { initRoadmap } from './modules/roadmap.js';
import { initPrograms } from './modules/programs.js';
import { initClosing } from './modules/closing.js';
import { initRegister } from './modules/register.js';

function whenReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

function waitForDeps() {
  return new Promise((resolve) => {
    const check = () => {
      if (window.gsap && window.ScrollTrigger && window.Lenis) {
        resolve();
      } else {
        requestAnimationFrame(check);
      }
    };
    check();
  });
}

whenReady(async () => {
  await waitForDeps();

  const { gsap, ScrollTrigger, Lenis } = window;
  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsHover = matchMedia('(hover: hover) and (pointer: fine)').matches
    && !('ontouchstart' in window);

  if (!reducedMotion) {
    const lenis = new Lenis({
      lerp: 0.16,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      smoothWheel: true,
      smoothTouch: false,
      gestureOrientation: 'vertical',
      orientation: 'vertical',
    });

    let scrollTriggerUpdateQueued = false;
    lenis.on('scroll', () => {
      if (scrollTriggerUpdateQueued) return;
      scrollTriggerUpdateQueued = true;
      requestAnimationFrame(() => {
        ScrollTrigger.update();
        scrollTriggerUpdateQueued = false;
      });
    });

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').slice(1);
        const target = id ? document.getElementById(id) : null;
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: 0, duration: 1.4 });
        }
      });
    });

    window.lenis = lenis;
    window.__lenis = lenis;
  }

  initLoader({
    reducedMotion,
    onComplete: () => {
      initNav();
      initHero({ reducedMotion, supportsHover });
      initAmbientParticles();
      initSpotlight({ reducedMotion, supportsHover });
      initSpotlightFeatures();
      initSpaces();
      initRoadmap();
      initPrograms();
      initClosing();
      initRegister();
      initAnimations();
      ScrollTrigger.refresh();
    },
  });

  document.addEventListener('visibilitychange', () => {
    const ambient = document.querySelector('.ambient');
    if (!ambient) return;
    ambient.classList.toggle('is-paused', document.hidden);
  });
});
