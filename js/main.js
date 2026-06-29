// Fade-in on scroll
(function () {
  var selectors = [
    '.section-label',
    '.section-heading',
    '.hero-sub',
    '.page-hero-sub',
    '.practice-card',
    '.tracks-card',
    '.geo-journey',
    '.credibility-logos',
    '.about-teaser-inner',
    '.quote-band blockquote',
    '.quote-source',
    '.coaching-who-card',
    '.structure-card',
    '.distinction-card',
    '.arc-phase',
    '.coaching-model-intro',
    '.coaching-pull-quote',
    '.coaching-body',
    '.cta-heading',
    '.cta-sub',
    '.about-photo-frame',
    '.about-son-frame',
    '.about-son-caption',
    '.contact-form',
    '.contact-expect',
    '.expect-list li',
    '.about-opening-stats',
    '.about-name-quote',
    '.why-me-grid',
    '.track-record-grid'
  ];

  var elements = document.querySelectorAll(selectors.join(', '));

  elements.forEach(function (el) {
    el.classList.add('fade-up');
  });

  // Stagger sibling cards within grids
  var grids = document.querySelectorAll(
    '.practices-grid, .tracks-cards, .coaching-who-grid, .structure-grid, .distinction-grid'
  );
  grids.forEach(function (grid) {
    var cards = grid.children;
    Array.from(cards).forEach(function (card, i) {
      card.style.transitionDelay = (i * 0.1) + 's';
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();

// Hamburger menu toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
  });

  // Close when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.innerHTML = '&#9776;';
    });
  });

  // Close when clicking outside the nav
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-inner')) {
      navLinks.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.innerHTML = '&#9776;';
    }
  });
}
