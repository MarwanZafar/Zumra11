import { shouldSkipReveal } from './reveal.js';

const TOTAL_STEPS = 3;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function initRegister() {
  const section = document.getElementById('register');
  if (!section) return;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const form = section.querySelector('#registerForm');
  const panels = section.querySelectorAll('.register__step-panel');
  const success = section.querySelector('.register__success');
  const progressFill = section.querySelector('.register__progress-fill');
  const progressSteps = section.querySelectorAll('.register__step');

  let currentStep = 1;

  function updateProgress() {
    const pct = (currentStep / TOTAL_STEPS) * 100;
    progressFill.style.width = `${pct}%`;
    progressSteps.forEach((s) => {
      const stepNum = parseInt(s.dataset.step, 10);
      s.classList.remove('is-active', 'is-done');
      if (stepNum === currentStep) s.classList.add('is-active');
      else if (stepNum < currentStep) s.classList.add('is-done');
    });
  }

  function showPanel(stepNum) {
    panels.forEach((p) => p.classList.remove('is-active'));
    success.classList.remove('is-active');
    const target = section.querySelector(`.register__step-panel[data-panel="${stepNum}"]`);
    if (target) target.classList.add('is-active');
  }

  function setFieldError(field, message) {
    const wrap = field.parentElement;
    const errEl = wrap.querySelector('.reg-field__error');
    if (message) {
      wrap.classList.add('has-error');
      if (errEl) errEl.textContent = message;
    } else {
      wrap.classList.remove('has-error');
      if (errEl) errEl.textContent = '';
    }
  }

  function validateStep(stepNum) {
    if (stepNum === 1) {
      return !!form.querySelector('input[name="role"]:checked');
    }
    if (stepNum === 2) {
      return true;
    }
    if (stepNum === 3) {
      let valid = true;
      const name = form.querySelector('#reg-name');
      const email = form.querySelector('#reg-email');

      setFieldError(name, '');
      setFieldError(email, '');

      if (!name.value.trim()) {
        setFieldError(name, 'الاسم مطلوب');
        valid = false;
      }
      const emailVal = email.value.trim();
      if (!emailVal) {
        setFieldError(email, 'البريد الإلكتروني مطلوب');
        valid = false;
      } else if (!EMAIL_RE.test(emailVal)) {
        setFieldError(email, 'بريد إلكتروني غير صحيح');
        valid = false;
      }
      return valid;
    }
    return true;
  }

  form.querySelectorAll('input[name="role"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      const nextBtn = section.querySelector('.register__step-panel[data-panel="1"] [data-action="next"]');
      if (nextBtn) nextBtn.disabled = false;
    });
  });

  section.querySelectorAll('[data-action="next"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!validateStep(currentStep)) return;
      if (currentStep < TOTAL_STEPS) {
        currentStep++;
        showPanel(currentStep);
        updateProgress();
      }
    });
  });

  section.querySelectorAll('[data-action="back"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        showPanel(currentStep);
        updateProgress();
      }
    });
  });

  form.querySelectorAll('.reg-field__input').forEach((input) => {
    input.addEventListener('input', () => setFieldError(input, ''));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    const roleEl = form.querySelector('input[name="role"]:checked');
    const data = {
      role: roleEl ? roleEl.value : null,
      interests: Array.from(form.querySelectorAll('input[name="interests"]:checked')).map((i) => i.value),
      name: form.querySelector('#reg-name').value.trim(),
      email: form.querySelector('#reg-email').value.trim(),
      phone: form.querySelector('#reg-phone').value.trim(),
      organization: form.querySelector('#reg-org').value.trim(),
      timestamp: new Date().toISOString(),
    };

    // TODO: wire to backend POST endpoint
    console.log('Registration submitted:', data);

    setTimeout(() => {
      panels.forEach((p) => p.classList.remove('is-active'));
      success.classList.add('is-active');
      progressFill.style.width = '100%';
      progressSteps.forEach((s) => {
        s.classList.remove('is-active');
        s.classList.add('is-done');
      });
    }, 400);
  });

  // Hide initial state up front so there's no "visible → flash hidden → fade in" pop
  gsap.set('.register__header .eyebrow', { opacity: 0, x: -20 });
  gsap.set('.register__title', { opacity: 0, y: 30 });
  gsap.set('.register__subtitle', { opacity: 0, y: 20 });
  gsap.set('.register__form-wrap', { opacity: 0, y: 40 });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 92%',
    once: true,
    onEnter: () => {
      if (shouldSkipReveal(section)) {
        gsap.set('.register__header .eyebrow', { opacity: 1, x: 0 });
        gsap.set('.register__title', { opacity: 1, y: 0 });
        gsap.set('.register__subtitle', { opacity: 1, y: 0 });
        gsap.set('.register__form-wrap', { opacity: 1, y: 0 });
        return;
      }
      gsap.to('.register__header .eyebrow',
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' });
      gsap.to('.register__title',
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.to('.register__subtitle',
        { opacity: 1, y: 0, duration: 0.7, delay: 0.4, ease: 'power3.out' });
      gsap.to('.register__form-wrap',
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
    },
  });
}
