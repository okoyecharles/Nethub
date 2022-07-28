import fetchMovie from './fetchMovieById';

const displayComments = () => {
  const buttons = document.querySelectorAll('.comment');

  buttons.forEach((button) => {
    button.addEventListener('click', () => { alert('Hello '); fetchMovie(button); });
  });
};

export default displayComments;