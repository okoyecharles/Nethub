/* eslint-disable */
const loadTemplate = (num) => {
  const template = document.querySelector('[data-movie-template]');
  const movieGrid = document.querySelector('[data-movie-grid]');

  movieGrid.innerHTML = '';
  const iterator = new Array(num);
  iterator.fill(0).forEach(_ => movieGrid.append(template.content.cloneNode(true)));
};

export default loadTemplate;