const navOperations = () => {
  // Toggle Navigation Menu
  const toggle = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('[data-nav-links-search]');

  toggle.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  // Toggle dropdownNav Content
  const dropdownToggle = document.querySelector('.nav__dropdown > .nav__link');

  dropdownToggle.addEventListener('click', (e) => {
    e.target.closest('.nav__link').nextElementSibling.classList.toggle('active');

    if (window.innerWidth > 800 && e.target === document.activeElement) {
      if (e.target.parentElement.nextElementSibling.classList.contains('active')) {
        e.target.parentElement.nextElementSibling.style.opacity = 1;
        e.target.parentElement.nextElementSibling.style.transform = 'translate(0, 2em)';
        e.target.parentElement.nextElementSibling.style.pointerEvents = 'all';
      } else {
        e.target.parentElement.nextElementSibling.style.opacity = 0;
        e.target.parentElement.nextElementSibling.style.transform = 'translate(0, -1em)';
        e.target.parentElement.nextElementSibling.style.pointerEvents = 'none';
      }
    }
  });
};

export default navOperations;