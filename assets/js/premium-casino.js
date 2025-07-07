// Premium Casino Microsite - Advanced JavaScript
class PremiumCasino {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initAnimations();
    this.initSlotTabs();
    this.initStickyHeader();
    this.initStickyCTA();
    this.initCounters();
    this.initMobileNav();
    this.initLanguageSwitcher();
  }

  setupEventListeners() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
    document.addEventListener('DOMContentLoaded', this.handleDOMLoaded.bind(this));
  }

  handleScroll() {
    this.updateStickyHeader();
    this.updateStickyCTA();
    this.updateAnimations();
  }

  handleResize() {
    this.updateAnimations();
  }

  handleDOMLoaded() {
    this.createFloatingElements();
    this.initIntersectionObserver();
  }

  // Sticky Header
  initStickyHeader() {
    this.header = document.querySelector('.header');
  }

  updateStickyHeader() {
    if (!this.header) return;
    
    const scrolled = window.scrollY > 100;
    this.header.classList.toggle('scrolled', scrolled);
  }

  // Sticky CTA Footer
  initStickyCTA() {
    this.stickyCTA = document.querySelector('.sticky-cta');
  }

  updateStickyCTA() {
    if (!this.stickyCTA) return;
    
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;
    const scrolled = window.scrollY > heroHeight * 0.8;
    this.stickyCTA.classList.toggle('visible', scrolled);
  }

  // Slot Tabs
  initSlotTabs() {
    const tabs = document.querySelectorAll('.slot-tab');
    const grids = document.querySelectorAll('.slots-grid');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding grid
        const targetGrid = tab.dataset.tab;
        grids.forEach(grid => {
          grid.style.display = grid.dataset.category === targetGrid ? 'grid' : 'none';
        });
      });
    });
  }

  // Mobile Navigation
  initMobileNav() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.mobile-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.classList.toggle('active');
      });

      // Close nav when clicking outside
      document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !nav.contains(e.target)) {
          nav.classList.remove('open');
          toggle.classList.remove('active');
        }
      });
    }
  }

  // Language Switcher
  initLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-switcher button');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        this.switchLanguage(lang);
        
        // Update active state
        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }

  switchLanguage(lang) {
    // Store language preference
    localStorage.setItem('preferred-language', lang);
    
    // Update document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    document.body.classList.toggle('ltr', lang === 'en');

    // Update translations if translation function exists
    if (typeof updateTranslations === 'function') {
      updateTranslations();
    }
  }

  // Animated Counters
  initCounters() {
    const counters = document.querySelectorAll('.bonus-amount');
    
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target || counter.textContent.replace(/\D/g, ''));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current) + '%';
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + '%';
        }
      };

      // Start animation when element is visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(counter);
    });
  }

  // Floating Background Elements
  createFloatingElements() {
    const bg = document.querySelector('.animated-bg');
    if (!bg) return;

    // Create floating casino elements
    const elements = ['♠', '♥', '♦', '♣', '🎰', '🎲'];
    
    for (let i = 0; i < 6; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.textContent = elements[i % elements.length];
      element.style.fontSize = Math.random() * 30 + 20 + 'px';
      element.style.left = Math.random() * 100 + '%';
      element.style.top = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 6 + 's';
      bg.appendChild(element);
    }
  }

  // Intersection Observer for Animations
  initIntersectionObserver() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  // Animations
  initAnimations() {
    // Parallax effect for hero background
    const hero = document.querySelector('.hero');
    if (hero) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
      });
    }

    // Hover effects for cards
    const cards = document.querySelectorAll('.bonus-card, .slot-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  updateAnimations() {
    // Update any scroll-based animations
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Parallax backgrounds
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  // Utility Methods
  static formatCurrency(amount, currency = 'JOD') {
    return new Intl.NumberFormat('ar-JO', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Slot Machine Animation
class SlotMachine {
  constructor(element) {
    this.element = element;
    this.symbols = ['🍒', '🍋', '🍊', '🍇', '⭐', '💎', '7️⃣'];
    this.isSpinning = false;
  }

  spin() {
    if (this.isSpinning) return;
    
    this.isSpinning = true;
    const reels = this.element.querySelectorAll('.reel');
    
    reels.forEach((reel, index) => {
      this.spinReel(reel, index * 200);
    });
    
    setTimeout(() => {
      this.isSpinning = false;
    }, 2000);
  }

  spinReel(reel, delay) {
    setTimeout(() => {
      let spins = 0;
      const maxSpins = 20 + Math.random() * 10;
      
      const spinInterval = setInterval(() => {
        reel.textContent = this.symbols[Math.floor(Math.random() * this.symbols.length)];
        spins++;
        
        if (spins >= maxSpins) {
          clearInterval(spinInterval);
          // Final symbol
          reel.textContent = this.symbols[Math.floor(Math.random() * this.symbols.length)];
        }
      }, 100);
    }, delay);
  }
}

// Jackpot Counter
class JackpotCounter {
  constructor(element, startValue = 1000000) {
    this.element = element;
    this.value = startValue;
    this.increment = Math.random() * 100 + 50;
    this.start();
  }

  start() {
    setInterval(() => {
      this.value += this.increment;
      this.element.textContent = this.formatValue(this.value);
    }, 5000 + Math.random() * 5000);
  }

  formatValue(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize main casino functionality
  new PremiumCasino();
  
  // Initialize slot machines
  document.querySelectorAll('.slot-machine').forEach(slot => {
    new SlotMachine(slot);
  });
  
  // Initialize jackpot counters
  document.querySelectorAll('.jackpot-counter').forEach(counter => {
    new JackpotCounter(counter);
  });
  
  // Load saved language preference
  const savedLang = localStorage.getItem('preferred-language') || 'ar';
  const langButton = document.querySelector(`[data-lang="${savedLang}"]`);
  if (langButton) {
    langButton.click();
  }
});

// Export for use in other files
window.PremiumCasino = PremiumCasino;
window.SlotMachine = SlotMachine;
window.JackpotCounter = JackpotCounter;