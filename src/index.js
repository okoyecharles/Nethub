import './index.scss';
import {
  displayMoviesCount,
} from './modules/Counters.js';
import navOperations from './modules/navOps.js';
import searchOperations from './modules/searchOps.js';
import handleCategoryClick from './modules/crumbOps.js';
import renderMovies from './modules/renderMovies.js';

handleCategoryClick();

// Operations on certain parts of the page
navOperations();
searchOperations();

// Render the Movies
renderMovies();

displayMoviesCount();
