const sectionElements = document.querySelectorAll('section[id]');

function updateActiveLink() {
  let current = null;
  const scrollPos = window.scrollY + 200;

  sectionElements.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  allLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveLink();
});

window.addEventListener('load', updateActiveLink);
