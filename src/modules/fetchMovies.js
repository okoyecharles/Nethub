import renderMovies from "./renderMovies.js";


const fetchMovies = async () => {
    const res = await fetch('https://api.tvmaze.com/shows');
    const data = await res.json();
    renderMovies(data);
};
  
export default fetchMovies;
  