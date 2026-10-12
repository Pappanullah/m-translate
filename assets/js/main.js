/* =================================================================atoz-main.js */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Hamburger Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
      hamburger.setAttribute('aria-expanded', !expanded);
    });

    // Menü schließen bei Klick auf einen Link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Aktive Klasse für aktuellen Menüpunkt setzen
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });
});