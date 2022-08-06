import './index.scss';
import {
  displayMoviesCount,
} from './modules/Counters.js';
import navOperations from './modules/navOps';
import searchOperations from './modules/searchOps';
import handleCategoryClick from './modules/crumbOps';
import renderMovies from './modules/renderMovies';

handleCategoryClick();

// Operations on certain parts of the page
navOperations();
searchOperations();

// Render the Movies
renderMovies();

displayMoviesCount();
