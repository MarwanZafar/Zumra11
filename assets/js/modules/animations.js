function initFeaturesObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.feat-item').forEach((el) => observer.observe(el));
}

export function initAnimations() {
  initFeaturesObserver();
}
