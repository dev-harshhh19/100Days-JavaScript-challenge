// Portfolio Script - 3D Effects, Animations & Scroll Fade

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const projectCards = document.querySelectorAll('.project-card');
const skillItems = document.querySelectorAll('.skills-list li');

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('active');
    navMenu?.classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 3D Tilt Effect on Project Cards
projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  });
});

// Scroll Fade Effect - Elements fade based on viewport position
const scrollFadeElements = document.querySelectorAll('.project-card, .about-text, .contact-form, .skills');

function updateScrollFade() {
  const viewportHeight = window.innerHeight;
  const fadeZone = viewportHeight * 0.15; // 15% fade zone at top and bottom

  scrollFadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;

    let opacity = 1;
    let translateY = 0;
    let scale = 1;

    // Fade out at top
    if (rect.bottom < fadeZone * 2) {
      const progress = Math.max(0, rect.bottom / (fadeZone * 2));
      opacity = progress;
      translateY = (1 - progress) * -30;
      scale = 0.95 + (progress * 0.05);
    }
    // Fade out at bottom
    else if (rect.top > viewportHeight - fadeZone * 2) {
      const progress = Math.max(0, (viewportHeight - rect.top) / (fadeZone * 2));
      opacity = progress;
      translateY = (1 - progress) * 30;
      scale = 0.95 + (progress * 0.05);
    }

    el.style.opacity = opacity;
    el.style.transform = `translateY(${translateY}px) scale(${scale})`;
  });
}

window.addEventListener('scroll', updateScrollFade, { passive: true });
window.addEventListener('resize', updateScrollFade);
updateScrollFade();

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Add reveal class to section titles
document.querySelectorAll('.section-title, .section-subtitle').forEach(el => {
  el.classList.add('reveal');
  revealOnScroll.observe(el);
});

// Staggered animation for skills
skillItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

// Rotating Typing Effect for Hero
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
  const titles = [
    'Frontend Developer',
    'UI Enthusiast',
    'JavaScript Enthusiast',
    'Problem Solver',
    'Clean Coder'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      heroSubtitle.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      heroSubtitle.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    // Add cursor effect
    heroSubtitle.style.borderRight = '2px solid var(--primary)';

    if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at end
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  setTimeout(typeEffect, 1000);
}

// Active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form submission feedback
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  const btn = contactForm.querySelector('.btn-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
});
