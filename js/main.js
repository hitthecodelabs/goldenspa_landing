// Preloader — show only on first visit
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  if (sessionStorage.getItem('gs_visited')) {
    preloader.style.display = 'none';
  } else {
    sessionStorage.setItem('gs_visited', '1');
    setTimeout(() => preloader.classList.add('hidden'), 1200);
  }
});

// Navbar scroll
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// FAQ
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
  if (!isActive) item.classList.add('active');
}

// Mobile menu
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.add('active');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('active');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Highlight active page in mobile tabs and nav
const currentPath = window.location.pathname;
document.querySelectorAll('.section-tabs .stab, .nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && currentPath.endsWith(href.replace('../', '').replace('./', ''))) {
    link.classList.add('active');
  }
});
