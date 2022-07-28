import './index.scss';
import fetchMovies from './modules/fetchMovies.js';
import { getLikes, postLikes } from './modules/manage-likes';

fetchMovies();

getLikes()