// main.js
// Ortak JS: sayfa geçişleri, nav, footer, dinamik içerik

document.addEventListener('DOMContentLoaded', function () {
  // Aktif nav linkini işaretle
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  // Sayfa geçişleri için smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Dil tercihi body class'ı
  const lang = localStorage.getItem('lang') || 'ar';
  document.body.classList.toggle('ltr', lang === 'en');
  document.body.classList.toggle('rtl', lang === 'ar');
});
