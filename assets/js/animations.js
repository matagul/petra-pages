// Advanced Animations for Premium Casino
class CasinoAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupHoverEffects();
    this.setupSlotMachineAnimations();
    this.setupCounterAnimations();
    this.setupParticleEffects();
    this.setupLoadingAnimations();
  }

  // Scroll-based animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
      observer.observe(el);
    });
  }

  animateElement(element) {
    const animationType = this.getAnimationType(element);
    
    switch (animationType) {
      case 'fade-in':
        this.fadeIn(element);
        break;
      case 'slide-in-left':
        this.slideInLeft(element);
        break;
      case 'slide-in-right':
        this.slideInRight(element);
        break;
      case 'scale-in':
        this.scaleIn(element);
        break;
    }
  }

  getAnimationType(element) {
    if (element.classList.contains('fade-in')) return 'fade-in';
    if (element.classList.contains('slide-in-left')) return 'slide-in-left';
    if (element.classList.contains('slide-in-right')) return 'slide-in-right';
    if (element.classList.contains('scale-in')) return 'scale-in';
    return 'fade-in';
  }

  fadeIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    
    requestAnimationFrame(() => {
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  }

  slideInLeft(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-50px)';
    
    requestAnimationFrame(() => {
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    });
  }

  slideInRight(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateX(50px)';
    
    requestAnimationFrame(() => {
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    });
  }

  scaleIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8)';
    
    requestAnimationFrame(() => {
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      element.style.opacity = '1';
      element.style.transform = 'scale(1)';
    });
  }

  // Hover effects
  setupHoverEffects() {
    // Card hover effects
    document.querySelectorAll('.bonus-card, .slot-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.cardHoverIn(card);
      });
      
      card.addEventListener('mouseleave', () => {
        this.cardHoverOut(card);
      });
    });

    // Button hover effects
    document.querySelectorAll('.cta-primary, .cta-secondary').forEach(button => {
      button.addEventListener('mouseenter', () => {
        this.buttonHoverIn(button);
      });
      
      button.addEventListener('mouseleave', () => {
        this.buttonHoverOut(button);
      });
    });
  }

  cardHoverIn(card) {
    card.style.transform = 'translateY(-8px) scale(1.02)';
    card.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
    
    // Add glow effect
    const glow = document.createElement('div');
    glow.className = 'card-glow';
    glow.style.cssText = `
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #ffd700, #8b5cf6, #06b6d4, #ffd700);
      border-radius: 22px;
      z-index: -1;
      opacity: 0.6;
      filter: blur(8px);
      animation: glow-rotate 2s linear infinite;
    `;
    
    card.style.position = 'relative';
    card.appendChild(glow);
  }

  cardHoverOut(card) {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
    
    const glow = card.querySelector('.card-glow');
    if (glow) {
      glow.remove();
    }
  }

  buttonHoverIn(button) {
    button.style.transform = 'translateY(-3px) scale(1.05)';
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }

  buttonHoverOut(button) {
    button.style.transform = 'translateY(0) scale(1)';
  }

  // Slot machine animations
  setupSlotMachineAnimations() {
    document.querySelectorAll('.slot-card').forEach(card => {
      card.addEventListener('click', () => {
        this.animateSlotSpin(card);
      });
    });
  }

  animateSlotSpin(card) {
    const image = card.querySelector('.slot-image');
    if (!image) return;

    // Create spinning effect
    image.style.transition = 'transform 0.1s ease-in-out';
    
    let spins = 0;
    const maxSpins = 10;
    
    const spinInterval = setInterval(() => {
      image.style.transform = `rotateY(${spins * 36}deg)`;
      spins++;
      
      if (spins >= maxSpins) {
        clearInterval(spinInterval);
        image.style.transform = 'rotateY(0deg)';
        image.style.transition = 'transform 0.3s ease-out';
        
        // Add win effect
        this.addWinEffect(card);
      }
    }, 50);
  }

  addWinEffect(card) {
    // Create coin shower effect
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.createCoin(card);
      }, i * 100);
    }
  }

  createCoin(container) {
    const coin = document.createElement('div');
    coin.textContent = '🪙';
    coin.style.cssText = `
      position: absolute;
      font-size: 20px;
      pointer-events: none;
      z-index: 1000;
      top: 20%;
      left: ${Math.random() * 80 + 10}%;
      animation: coin-fall 1s ease-in forwards;
    `;
    
    container.style.position = 'relative';
    container.appendChild(coin);
    
    setTimeout(() => coin.remove(), 1000);
  }

  // Counter animations
  setupCounterAnimations() {
    document.querySelectorAll('.bonus-amount').forEach(counter => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(counter);
    });
  }

  animateCounter(element) {
    const target = parseInt(element.dataset.target || element.textContent.replace(/\D/g, ''));
    const duration = 2000;
    const start = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOut);
      
      element.textContent = current + '%';
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  // Particle effects
  setupParticleEffects() {
    this.createFloatingParticles();
    this.setupMouseTrail();
  }

  createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.createParticle(particleContainer);
      }, i * 200);
    }
    
    // Continuously create new particles
    setInterval(() => {
      this.createParticle(particleContainer);
    }, 3000);
  }

  createParticle(container) {
    const particles = ['✨', '💎', '🌟', '⭐', '💫'];
    const particle = document.createElement('div');
    
    particle.textContent = particles[Math.floor(Math.random() * particles.length)];
    particle.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 20 + 10}px;
      left: ${Math.random() * 100}%;
      top: 100%;
      opacity: 0.7;
      animation: float-up ${Math.random() * 10 + 10}s linear forwards;
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, 20000);
  }

  setupMouseTrail() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Throttle trail creation
      if (Math.random() > 0.9) {
        this.createTrailParticle(mouseX, mouseY);
      }
    });
  }

  createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: radial-gradient(circle, #ffd700, transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      left: ${x}px;
      top: ${y}px;
      animation: trail-fade 0.5s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 500);
  }

  // Loading animations
  setupLoadingAnimations() {
    // Animate elements as they load
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('load', () => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        
        requestAnimationFrame(() => {
          img.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
          img.style.opacity = '1';
          img.style.transform = 'scale(1)';
        });
      });
    });
  }
}

// CSS Animations (injected dynamically)
const animationStyles = `
  @keyframes glow-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes coin-fall {
    0% {
      transform: translateY(0) rotateZ(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(200px) rotateZ(360deg);
      opacity: 0;
    }
  }
  
  @keyframes float-up {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes trail-fade {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
    }
  }
  
  @keyframes jackpot-flash {
    0%, 100% {
      color: #ffd700;
      text-shadow: 0 0 10px #ffd700;
    }
    50% {
      color: #ffffff;
      text-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700;
    }
  }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CasinoAnimations();
});

// Export for use in other files
window.CasinoAnimations = CasinoAnimations;