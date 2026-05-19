export function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  const gsap = window.gsap;
  const dotX = gsap.quickTo(dot, 'x', { duration: 0, ease: 'none' });
  const dotY = gsap.quickTo(dot, 'y', { duration: 0, ease: 'none' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.12, ease: 'power3.out' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.12, ease: 'power3.out' });

  window.addEventListener('mousemove', (e) => {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  }, { passive: true });

  const setState = (state) => {
    ring.classList.remove('is-hover-cta', 'is-hover-link', 'is-hover-text');
    dot.classList.remove('is-hover-cta', 'is-hover-link', 'is-hover-text');
    if (state) {
      ring.classList.add(`is-hover-${state}`);
      dot.classList.add(`is-hover-${state}`);
    }
  };

  const bind = (selector, state) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.addEventListener('mouseenter', () => setState(state));
      el.addEventListener('mouseleave', () => setState(null));
    });
  };

  bind('[data-cursor="cta"]', 'cta');
  bind('[data-cursor="link"], a:not([data-cursor])', 'link');
  bind('input, textarea, [contenteditable]', 'text');

  window.addEventListener('mouseleave', () => {
    ring.style.opacity = '0';
    dot.style.opacity = '0';
  });
  window.addEventListener('mouseenter', () => {
    ring.style.opacity = '';
    dot.style.opacity = '';
  });
}
