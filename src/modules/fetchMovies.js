import displayComments from "./displayComments.js";
import renderMovies from "./renderMovies.js";


const fetchMovies = async () => {
    const res = await fetch('https://api.tvmaze.com/shows');
    const data = await res.json();
    renderMovies(data);

    displayComments()
};
  
export default fetchMovies;
  