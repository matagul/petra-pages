// main.js
// Common JS: navigation highlighting, smooth scroll and dynamic content

document.addEventListener('DOMContentLoaded', function () {
  // Highlight active nav link
  const navLinks = document.querySelectorAll('.nav-center a, .mobile-nav a');
  navLinks.forEach(link => {
    if (location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  // Hamburger/mobile nav logic
  const hamburger = document.querySelector('.header-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Language switcher logic
  const langBtns = document.querySelectorAll('.header-lang button');
  langBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      localStorage.setItem('lang', btn.dataset.lang);
      document.body.classList.toggle('ltr', btn.dataset.lang === 'en');
      document.body.classList.toggle('rtl', btn.dataset.lang === 'ar');
      document.documentElement.setAttribute('lang', btn.dataset.lang);
      document.documentElement.setAttribute('dir', btn.dataset.lang === 'ar' ? 'rtl' : 'ltr');
      langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === btn.dataset.lang));
      if (typeof updateTranslations === 'function') updateTranslations();
    });
  });
  // On load, set lang from localStorage
  const lang = localStorage.getItem('lang') || 'ar';
  document.body.classList.toggle('ltr', lang === 'en');
  document.body.classList.toggle('rtl', lang === 'ar');
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  if (typeof updateTranslations === 'function') updateTranslations();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Fade-in/slide-in animation on scroll
window.addEventListener('DOMContentLoaded', function () {
  const animatedElems = document.querySelectorAll('.fade-in, .slide-in-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    animatedElems.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    animatedElems.forEach(el => el.classList.add('visible'));
  }
});
