import './index.scss';
import { displayMoviesCount } from './modules/Counters';
import fetchMovies from './modules/fetchMovies.js';


fetchMovies();

// post reservation using fetch api
// const postReservation = () => {
//   fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/reservations', {
//     body: JSON.stringify({
//       item_id: '1',
//       date_start: '2020-01-01',
//       date_end: '2020-01-02',
//       username: 'Test User',
//     }),
//     method: 'POST',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => response.text())
//     .then((data) => console.log(data));
// };

// postReservation();


displayMoviesCount();
