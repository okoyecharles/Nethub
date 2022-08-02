import './index.scss';
import { displayMoviesCount } from './modules/Counters.js';
import fetchMovies from './modules/fetchMovies.js';
import navOperations from './modules/navOps';

fetchMovies();

navOperations()

displayMoviesCount();
