const getCommentCounter = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/comments?item_id=${id}`);

  const comments = await data.json();
  const counter = comments.length;

  return counter;
};

const getMoviesCounter = async () => {
  const data = await fetch('https://api.tvmaze.com/shows');

  const movies = await data.json();
  const counter = movies.length;

  return counter;
};

const displayMoviesCount = async () => {
  const all = document.querySelector('.count-movies');
  const moviesCounter = await getMoviesCounter();

  all.textContent = moviesCounter;
};
export { getCommentCounter, getMoviesCounter, displayMoviesCount };