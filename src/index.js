import './index.scss';
import {
  displayMoviesCount,
} from './modules/Counters.js';
import loadTemplate from './modules/loadTemplate';
import fetchMovies from './modules/fetchMovies.js';
import navOperations from './modules/navOps';
import searchOperations from './modules/searchOps';

// Website Skeleton Before Main Page Loads
loadTemplate(15);

// Operations on certain parts of the page
navOperations();
searchOperations();

// Fetch the Movies
fetchMovies();

displayMoviesCount();
