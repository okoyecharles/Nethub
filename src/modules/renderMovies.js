import { getLikes } from './manage-likes';

const renderMovies = async (data) => {
  const moviesSection = document.querySelector('.MoviesContent');
  // const likesArray = await getLikes();
  data.forEach((movie) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-index', `${movie.id}`);

    const img = document.createElement('img');
    img.className = 'imgMovie';
    img.src = movie.image.medium;
    img.alt = movie.name;

    const title = document.createElement('h3');
    title.className = 'cardTitle';
    title.textContent = movie.name;
    // const likes = document.createElement('p');
    // likes.className = 'likes';
    // const filtered = [];
    // likesArray.forEach((item) => {
    //   if (item.item_id === movie.id) filtered.push(item);
    // });
    // likes.textContent = filtered[0]?.likes || 0;
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
    const comments = document.createElement('button');
    comments.type = 'button';
    comments.textContent = 'Comments';
    comments.className = 'comment';

    const Reservation = document.createElement('button');
    Reservation.type = 'button';
    Reservation.textContent = 'Reservation';
    Reservation.className = 'reservation';

    buttons.append(comments, Reservation);
    card.append(img, title, buttons);
    moviesSection.append(card);
  });
};

export default renderMovies;