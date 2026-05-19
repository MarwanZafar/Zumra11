export function initNav() {
  const ScrollTrigger = window.ScrollTrigger;
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('navMobile');
  const navItems = document.querySelectorAll('.nav__link, .nav__mobile-links a');

  setTimeout(() => nav?.classList.add('is-visible'), 100);

  let ticking = false;
  let lastScrollY = window.scrollY || window.pageYOffset;
  let pendingScrollY = lastScrollY;
  let isScrolled = nav?.classList.contains('is-scrolled') ?? false;
  let isHidden = nav?.classList.contains('nav--hidden') ?? false;
  const HIDE_THRESHOLD = 60;
  const SCROLL_DELTA = 8;

  const applyNavScrollState = (scrollY) => {
    if (!nav) return;

    const nextScrolled = scrollY > 80;
    if (nextScrolled !== isScrolled) {
      nav.classList.toggle('is-scrolled', nextScrolled);
      isScrolled = nextScrolled;
    }

    const diff = scrollY - lastScrollY;
    let nextHidden = isHidden;

    if (scrollY < HIDE_THRESHOLD) {
      nextHidden = false;
    } else if (Math.abs(diff) >= SCROLL_DELTA) {
      nextHidden = diff > 0;
    }

    if (nextHidden !== isHidden) {
      nav.classList.toggle('nav--hidden', nextHidden);
      isHidden = nextHidden;
    }

    lastScrollY = scrollY;
  };

  const scheduleNavScrollState = (scrollY) => {
    pendingScrollY = scrollY;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      applyNavScrollState(pendingScrollY);
      ticking = false;
    });
  };

  if (window.lenis) {
    window.lenis.on('scroll', ({ scroll }) => scheduleNavScrollState(scroll));
  } else {
    window.addEventListener('scroll', () => {
      scheduleNavScrollState(window.scrollY || window.pageYOffset);
    }, { passive: true });
  }

  const spacesBand = document.querySelector('.spaces-band');
  if (nav && spacesBand && ScrollTrigger) {
    ScrollTrigger.create({
      trigger: spacesBand,
      start: 'top 80px',
      end: 'bottom 80px',
      onToggle: ({ isActive }) => nav.classList.toggle('nav--on-light', isActive),
    });
  }

  const sections = ['hero', 'spaces', 'roadmap', 'programs', 'register'];
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: ({ isActive }) => {
        if (isActive) {
          navItems.forEach((l) => {
            l.classList.toggle('is-active', l.dataset.scrollTo === id);
          });
        }
      },
    });
  });

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu?.classList.toggle('is-open');
    mobileMenu?.setAttribute('aria-hidden', String(isOpen));
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.nav__mobile-links a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger?.setAttribute('aria-expanded', 'false');
      mobileMenu?.classList.remove('is-open');
      mobileMenu?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  document.querySelectorAll('[data-scroll-to]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.dataset.scrollTo;
      const target = document.getElementById(targetId);
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: -20, duration: 1.4 });
      }
    });
  });
}
