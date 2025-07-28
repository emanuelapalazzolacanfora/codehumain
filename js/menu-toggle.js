const toggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');
const allLinks = navLinksContainer.querySelectorAll('a');

function closeMenu() {
  navLinksContainer.classList.remove('active');
  toggle.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function openMenu() {
  navLinksContainer.classList.add('active');
  toggle.classList.add('active');
  toggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

toggle.addEventListener('click', () => {
  const isOpen = navLinksContainer.classList.contains('active');
  isOpen ? closeMenu() : openMenu();
});

allLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();

    // Mise à jour immédiate de l'état actif
    allLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Mise à jour forcée après scroll (smooth behavior)
    setTimeout(updateActiveLink, 300);
  });
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    closeMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});
