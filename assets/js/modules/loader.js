const AR_TAGLINE = 'حيث تتشكل الأفكار';
const TYPE_SPEED_MS = 55;
const PROGRESS_MS = 1200;
const MIN_TOTAL_MS = 2400;
const MAX_TOTAL_MS = 4000;

function typeArabic(el, text) {
  return new Promise((resolve) => {
    let start = null;
    let written = 0;
    const tick = (t) => {
      if (start == null) start = t;
      const target = Math.min(text.length, Math.floor((t - start) / TYPE_SPEED_MS));
      if (target > written) {
        written = target;
        el.textContent = text.slice(0, written);
      }
      if (written < text.length) {
        requestAnimationFrame(tick);
      } else {
        resolve();
      }
    };
    requestAnimationFrame(tick);
  });
}

function fillSegments(segs) {
  return new Promise((resolve) => {
    const t0 = performance.now();
    const count = segs.length;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / PROGRESS_MS);
      for (let i = 0; i < count; i++) {
        const segStart = i / count;
        const segEnd = (i + 1) / count;
        const local = Math.min(1, Math.max(0, (p - segStart) / (segEnd - segStart)));
        segs[i].style.setProperty('--seg-fill', local.toString());
      }
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        resolve();
      }
    };
    requestAnimationFrame(tick);
  });
}

export function initLoader({ onComplete, reducedMotion = false } = {}) {
  const loader = document.getElementById('loader');
  if (!loader) {
    onComplete && onComplete();
    return;
  }

  if (reducedMotion) {
    loader.style.display = 'none';
    onComplete && onComplete();
    return;
  }

  const logoWrap = loader.querySelector('.loader-logo-wrap');
  const arWrap = loader.querySelector('.loader-tagline-ar');
  const arText = loader.querySelector('.loader-tagline-ar__text');
  const enLine = loader.querySelector('.loader-tagline-en');
  const segs = Array.from(loader.querySelectorAll('.loader-progress__seg'));
  const gsap = window.gsap;
  const startedAt = performance.now();
  let exited = false;

  const cap = setTimeout(() => exit(), MAX_TOTAL_MS);

  function exit() {
    if (exited) return;
    exited = true;
    clearTimeout(cap);
    gsap.to(loader, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.9,
      ease: 'power4.inOut',
      onComplete: () => {
        loader.style.display = 'none';
        onComplete && onComplete();
      },
    });
  }

  const tl = gsap.timeline();

  tl.to(logoWrap, {
    clipPath: 'inset(0% 0 0 0)',
    duration: 1.2,
    ease: 'power4.out',
  })
    .to(arWrap, { opacity: 1, duration: 0.25, ease: 'power2.out' }, '-=0.2')
    .call(() => { typeArabic(arText, AR_TAGLINE); })
    .to(enLine, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '+=0.55')
    .call(() => {
      fillSegments(segs).then(() => {
        const elapsed = performance.now() - startedAt;
        const wait = Math.max(0, MIN_TOTAL_MS - elapsed);
        setTimeout(exit, wait);
      });
    });
}
