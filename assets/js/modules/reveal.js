// Detects whether the user is scrolling fast or has already scrolled past a section,
// in which case the section's intro animation would look like a late "snap-in" rather
// than a graceful "settle". Callers should set elements directly to their final state.

const VELOCITY_THRESHOLD = 35;

export function shouldSkipReveal(section) {
  if (!section) return false;

  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;

  // Section already mostly past the viewport
  if (rect.bottom < vh * 0.25) return true;
  // Section top well above the viewport
  if (rect.top < -vh * 0.15) return true;

  // Fast scrolling (Lenis exposes a smoothed velocity)
  const lenis = window.lenis || window.__lenis;
  if (lenis && typeof lenis.velocity === 'number') {
    if (Math.abs(lenis.velocity) > VELOCITY_THRESHOLD) return true;
  }
  return false;
}

// Helper: when reveal should be skipped, instantly apply the "to" state to every
// (target, toVars) pair without animating. Otherwise runs the supplied animateFn.
export function smartReveal(section, animateFn, instantStateFn) {
  if (shouldSkipReveal(section)) {
    instantStateFn();
    return;
  }
  animateFn();
}
