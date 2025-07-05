// scroll-effects.js
// Parallax backgrounds and scroll progress chip

document.addEventListener('DOMContentLoaded', () => {
  const parallaxElems = document.querySelectorAll('.parallax-bg');
  const stickyChip = document.querySelector('.sticky-chip');

  function updateScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    if (stickyChip) {
      stickyChip.style.transform = `rotate(${progress * 360}deg)`;
    }

    parallaxElems.forEach(el => {
      const speed = parseFloat(el.dataset.speed || '0.3');
      el.style.transform = `translate3d(0,${-scrollTop * speed}px,0)`;
    });
  }

  updateScroll();
  document.addEventListener('scroll', updateScroll, { passive: true });
});
