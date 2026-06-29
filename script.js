'use strict';

/* ---- Typewriter Effect ---- */
const roles = [
  'ML Engineer in Training',
  'Python Developer',
  'Data Analyst',
  'FastAPI Builder',
  'Problem Solver'
];

let roleIdx   = 0;
let charIdx   = 0;
let isDeleting = false;
const typeEl  = document.getElementById('typewriter-text');
const SPEED_TYPE   = 75;
const SPEED_DELETE = 38;
const PAUSE_END    = 1800;
const PAUSE_START  = 300;

function typewriter() {
  const current = roles[roleIdx];

  if (!isDeleting) {
    typeEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      isDeleting = true;
      setTimeout(typewriter, PAUSE_END);
      return;
    }
  } else {
    typeEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(typewriter, PAUSE_START);
      return;
    }
  }

  setTimeout(typewriter, isDeleting ? SPEED_DELETE : SPEED_TYPE);
}

// Start typewriter after initial animation delay
setTimeout(typewriter, 900);

/* ---- Sticky Navbar ---- */
const navbar = document.getElementById('navbar');

function handleScroll() {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  highlightNav();
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

/* ---- Active Nav Highlight ---- */
const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact'];

function highlightNav() {
  let current = 'hero';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) {
      current = id;
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

/* ---- Hamburger Menu ---- */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open.toString());
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ---- Scroll Reveal ---- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.02 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Bulletproof fallback: reveal all elements after 1.5s if observer didn't trigger
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    el.classList.add('visible');
  });
}, 1500);

/* ---- Animated Stat Counters ---- */
function animateCounter(id, target, decimals = 0, suffix = '') {
  const el = document.getElementById(id);
  if (!el) return;
  const duration = 1800;
  const start = performance.now();
  const from = 0;

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    // ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = from + (target - from) * eased;
    el.textContent = decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value) + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = decimals > 0 ? target.toFixed(decimals) : target + suffix;
    }
  }

  requestAnimationFrame(step);
}

// Trigger counters when About section enters viewport
let countersTriggered = false;
const aboutSection = document.getElementById('about');

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersTriggered) {
      countersTriggered = true;
      animateCounter('stat-cgpa',     8.48, 2);
      animateCounter('stat-projects', 3,    0, '+');
      animateCounter('stat-certs',    5,    0, '+');
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.1 });

if (aboutSection) {
  counterObserver.observe(aboutSection);
}

/* ---- Achievements Gallery Tabs Switcher ---- */
window.switchGalleryTab = function(tabName) {
  const certBtn = document.getElementById('tab-certs-btn');
  const achBtn = document.getElementById('tab-ach-btn');
  
  const certPane = document.getElementById('pane-certs');
  const achPane = document.getElementById('pane-ach');

  if (certBtn && achBtn && certPane && achPane) {
    if (tabName === 'certs') {
      certBtn.classList.add('active');
      achBtn.classList.remove('active');
      certPane.classList.add('active');
      achPane.classList.remove('active');
    } else {
      achBtn.classList.add('active');
      certBtn.classList.remove('active');
      achPane.classList.add('active');
      certPane.classList.remove('active');
    }
  }
};

/* ---- Lightbox Modal Gallery ---- */
// Array of all items (8 certificates + 2 achievements)
const galleryItems = [
  { src: './Certificates/1-3cbc6abe-eb0a-4c16-9d6d-85104decd881_page-0001.jpg', title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate Certificate' },
  { src: './Certificates/1-50d150c6-96b1-4463-bd0b-16d4b6170a57_page-0001.jpg', title: '100 Days of Code Python Bootcamp Certification' },
  { src: './Certificates/IBM EDA.jpeg', title: 'IBM Exploratory Data Analysis for Machine Learning Certificate' },
  { src: './Certificates/Kaggle Into to ML.jpeg', title: 'Kaggle Introduction to Machine Learning Certificate' },
  { src: './Certificates/NOC26CS74S15640058904564782_page-0001.jpg', title: 'Programming, Data Structures and Algorithms using Python - NPTEL IIT Madras' },
  { src: './Certificates/NPTEL26CS79S35750037003185498_page-0001.jpg', title: 'Machine Learning - NPTEL Certification Milestone' },
  { src: './Certificates/eCertificate_page-0001.jpg', title: 'Engineer AI Agents with Agent Development Kit (ADK) Certificate' },
  { src: './Certificates/udemy certificaate.jpg', title: 'Complete Web Development / Programming Course - Udemy Certificate' },
  { src: './Achievement/Adobe Scan 13 Jun 2026_page-0001.jpg', title: 'IEEE Volunteer Certificate - ICIH 2025' },
  { src: './Achievement/FinalistCard_Jatin Karma_page-0001.jpg', title: 'IIC Regional Meet / Regular Hackathon Finalist Card' }
];

let currentLightboxIdx = 0;
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImgElement = document.getElementById('lightbox-img-element');
const lightboxTitleElement = document.getElementById('lightbox-title-element');

window.openLightbox = function(idx) {
  currentLightboxIdx = idx;
  updateLightboxContent();
  if (lightboxModal) {
    lightboxModal.classList.add('active');
  }
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  if (lightboxModal) {
    lightboxModal.classList.remove('active');
  }
  document.body.style.overflow = '';
};

window.changeLightboxImage = function(direction) {
  currentLightboxIdx = (currentLightboxIdx + direction + galleryItems.length) % galleryItems.length;
  updateLightboxContent();
};

function updateLightboxContent() {
  const item = galleryItems[currentLightboxIdx];
  if (item && lightboxImgElement && lightboxTitleElement) {
    lightboxImgElement.src = item.src;
    lightboxImgElement.alt = item.title;
    lightboxTitleElement.textContent = item.title;
  }
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (lightboxModal && !lightboxModal.classList.contains('active')) return;
  
  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowRight') {
    changeLightboxImage(1);
  } else if (e.key === 'ArrowLeft') {
    changeLightboxImage(-1);
  }
});

// Close click outside
if (lightboxModal) {
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });
}
