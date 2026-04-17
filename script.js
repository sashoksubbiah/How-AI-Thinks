/* ============================================================
   HOW AI THINKS — Shared JavaScript
   ============================================================ */

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// Reading progress bar
window.addEventListener('scroll', () => {
  const fill = document.querySelector('.nav-progress-fill');
  if (!fill) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  fill.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
});
