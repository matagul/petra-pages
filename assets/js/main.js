// main.js
// Common JS: navigation highlighting, smooth scroll and dynamic content

document.addEventListener('DOMContentLoaded', function () {
  // Highlight active nav link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

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

  // Body language class
  const lang = localStorage.getItem('lang') || 'ar';
  document.body.classList.toggle('ltr', lang === 'en');
  document.body.classList.toggle('rtl', lang === 'ar');
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
