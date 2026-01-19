// 100 Days Journey - Visual Animation Scripts

// Create floating particles
function createParticles() {
  const container = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (10 + Math.random() * 10) + 's';
    particle.style.opacity = 0.1 + Math.random() * 0.3;
    container.appendChild(particle);
  }
}

// Animate numbers counting up
function animateNumbers() {
  const stats = document.querySelectorAll('.stat-number[data-target]');

  stats.forEach(stat => {
    const target = parseInt(stat.dataset.target);
    const duration = 2000;
    const start = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      stat.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        stat.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  });
}

// Scroll animations for timeline
function setupScrollAnimations() {
  const phases = document.querySelectorAll('.timeline-phase');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  phases.forEach(phase => observer.observe(phase));
}

// Create confetti
function createConfetti() {
  const container = document.getElementById('confetti');
  const colors = ['#d84100', '#e27140', '#fbbf24', '#10b981', '#3b82f6', '#8b5cf6'];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 5 + 's';
    confetti.style.animationDuration = (3 + Math.random() * 4) + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    if (Math.random() > 0.5) {
      confetti.style.borderRadius = '50%';
    }

    container.appendChild(confetti);
  }
}

// Project card interactions
function setupProjectCards() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cards.forEach(c => {
        if (c !== card) {
          c.style.opacity = '0.5';
          c.style.transform = 'scale(0.98)';
        }
      });
    });

    card.addEventListener('mouseleave', () => {
      cards.forEach(c => {
        c.style.opacity = '1';
        c.style.transform = '';
      });
    });
  });
}

// Parallax effect on hero
function setupParallax() {
  const hero = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled / 700;
  });
}

// Milestone click effect
function setupMilestones() {
  const milestones = document.querySelectorAll('.milestone');

  milestones.forEach(milestone => {
    milestone.addEventListener('click', () => {
      const dot = milestone.querySelector('.milestone-dot');
      dot.style.transform = 'scale(1.5)';
      setTimeout(() => {
        dot.style.transform = '';
      }, 200);
    });
  });
}

// Celebration trigger on scroll to end
function setupCelebrationTrigger() {
  const celebration = document.querySelector('.celebration');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        celebration.style.animation = 'fadeInUp 1s ease-out';

        // Burst of extra confetti
        const container = document.getElementById('confetti');
        const colors = ['#d84100', '#fbbf24', '#10b981'];

        for (let i = 0; i < 30; i++) {
          setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = (40 + Math.random() * 20) + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = '3s';
            container.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
          }, i * 50);
        }
      }
    });
  }, { threshold: 0.5 });

  observer.observe(celebration);
}

// Smooth page transitions
function setupPageTransitions() {
  const links = document.querySelectorAll('a[href]:not([href^="#"]):not([target="_blank"])');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Skip external links
      if (href.startsWith('http') && !href.includes(window.location.host)) {
        return;
      }

      e.preventDefault();
      document.body.classList.add('page-transitioning');

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  animateNumbers();
  setupScrollAnimations();
  createConfetti();
  setupProjectCards();
  setupParallax();
  setupMilestones();
  setupCelebrationTrigger();
  setupPageTransitions();

  console.log('🎉 100 Days of JavaScript - Journey Loaded!');
});
