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
