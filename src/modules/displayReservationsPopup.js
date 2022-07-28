import fetchMovie from './fetchMovieById';

const displayReservations = () => {
  const buttons = document.querySelectorAll('.reservation');

  buttons.forEach((button) => {
    button.addEventListener('click', () => { fetchMovie(button); });
  });
};

export default displayReservations;