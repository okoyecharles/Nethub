const getCommentCounter = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/comments?item_id=${id}`);

  const comments = await data.json();
  const counter = comments.length;

  return counter;
};

const getReservationCounter = async (id) => {
  const data = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/reservations?item_id=${id}`,
  );

  const reservations = await data.json();
  const counter = reservations.length;

  return counter;
};

const getMoviesCounter = async () => {
  const data = await fetch('https://api.tvmaze.com/shows');

  const movies = await data.json();
  const counter = movies.length;

  return counter;
};

const displayMoviesCount = async () => {
  const crumb = document.querySelector('[data-crumb-bar]');
  const moviesCount = await getMoviesCounter();

  crumb.firstElementChild.firstElementChild.innerText = `Movies (${moviesCount})`;
};
export {
  getCommentCounter, getReservationCounter, getMoviesCounter, displayMoviesCount,
};