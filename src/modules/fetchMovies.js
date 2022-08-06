const fetchMovies = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();

  return data;
};

export default fetchMovies;
