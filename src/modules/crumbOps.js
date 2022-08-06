import renderMovies from './renderMovies.js';
import {
  capitalize,
} from './utilities.js';

const handleCategoryClick = () => {
  const crumbBar = document.querySelector('[data-crumb-bar]');
  const crumbReset = crumbBar.firstElementChild;
  const categoryLinks = document.querySelectorAll('[data-category-link] > a');

  const mobileNav = document.querySelector('[data-nav-links-search]');
  const body = document.querySelector('body');
  const toggle = document.querySelector('[data-nav-toggle]');

  crumbReset.addEventListener('click', () => renderMovies());

  categoryLinks.forEach((link) => link.addEventListener('click', () => {
    renderMovies(capitalize(link.innerText));
    if (crumbBar.children[1]) crumbBar.children[1].remove();
    const newCrumb = document.createElement('div');
    newCrumb.dataset.crumb = 2;
    newCrumb.innerHTML = `<span>${link.innerText}</span>`;
    crumbBar.append(newCrumb);
    if (window.innerWidth < 800) {
      mobileNav.classList.remove('active');
      toggle.classList.toggle('active');
      body.style.overflow = 'visible';
    }
  }));
};

export default handleCategoryClick;

// scifi