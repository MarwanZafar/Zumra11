const COLORS = [
  'rgba(217, 145, 9, 0.55)',
  'rgba(228, 73, 102, 0.45)',
  'rgba(53, 154, 181, 0.50)',
  'rgba(77, 68, 150, 0.45)',
  'rgba(13, 91, 90, 0.65)',
  'rgba(13, 91, 90, 0.65)',
  'rgba(196, 106, 54, 0.50)',
];

let currentContainerId = null;

export function initParticles(containerId = 'hero-particles') {
  currentContainerId = containerId;
  const container = document.getElementById(containerId);
  if (!container) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    container.innerHTML = '';
    return;
  }

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const count = isMobile ? 14 : 32;

  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size = 1 + Math.random() * 2.5;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const opacity = (0.3 + Math.random() * 0.5).toFixed(2);
    const left = (Math.random() * 100).toFixed(1);
    const top = (15 + Math.random() * 75).toFixed(1);
    const duration = (5 + Math.random() * 6).toFixed(2);
    const delay = (Math.random() * 5).toFixed(2);

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${left}%;
      top: ${top}%;
      --p-op: ${opacity};
      opacity: ${opacity};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(p);
  }
}

let resizeTimer = null;
window.addEventListener('resize', () => {
  if (!currentContainerId) return;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => initParticles(currentContainerId), 200);
});

const AMBIENT_COLORS = [
  'rgba(13, 91, 90, 0.5)',
  'rgba(13, 91, 90, 0.5)',
  'rgba(196, 106, 54, 0.35)',
  'rgba(53, 154, 181, 0.3)',
  'rgba(217, 145, 9, 0.3)',
  'rgba(77, 68, 150, 0.3)',
  'rgba(228, 73, 102, 0.25)',
];

export function initAmbientParticles() {
  const container = document.getElementById('ambientParticles');
  if (!container) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    container.innerHTML = '';
    return;
  }

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const count = isMobile ? 8 : 20;

  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size = 1.5 + Math.random() * 2;
    const color = AMBIENT_COLORS[Math.floor(Math.random() * AMBIENT_COLORS.length)];
    const opacity = (0.2 + Math.random() * 0.4).toFixed(2);
    const left = (Math.random() * 100).toFixed(1);
    const top = (Math.random() * 100).toFixed(1);
    const duration = (10 + Math.random() * 8).toFixed(2);
    const delay = (Math.random() * 10).toFixed(2);

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${left}%;
      top: ${top}%;
      --p-op: ${opacity};
      opacity: ${opacity};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(p);
  }
}

let ambientResizeTimeout = null;
window.addEventListener('resize', () => {
  if (!document.getElementById('ambientParticles')) return;
  clearTimeout(ambientResizeTimeout);
  ambientResizeTimeout = setTimeout(initAmbientParticles, 250);
});
