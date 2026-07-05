/**
 * navbar.js — Shared navbar behaviour
 * - Scroll shadow
 * - Active link highlight
 * - Mobile burger toggle
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('navBurger');
  const links  = document.querySelector('.navbar__links');

  // Scroll shadow
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.background = window.scrollY > 20
        ? 'rgba(10,10,10,0.97)'
        : 'rgba(10,10,10,0.85)';
    }, { passive: true });
  }

  // Mobile toggle
  if (burger && links) {
    burger.addEventListener('click', () => {
      links.classList.toggle('open');
      burger.classList.toggle('active');
    });
  }
}