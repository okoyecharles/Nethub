import loadPopup from './loadPopup.js';
import { getLikes, postLikes } from './manageLikes.js';

const renderMovies = async (data) => {
  const movies = document.querySelector('.movie-section');
  const likesArray = await getLikes();

  // Renders all the Movies
  data.forEach((movie) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-index', `${movie.id}`);

    const cardImage = document.createElement('img');
    cardImage.className = 'card-image';
    cardImage.src = movie.image.medium;
    cardImage.alt = movie.name;

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = movie.name;

    const likesContainer = document.createElement('div');
    likesContainer.className = 'likesContainer';
    const thumbsUp = document.createElement('div');
    thumbsUp.className = "tump";
    thumbsUp.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';

    const likes = document.createElement('p');
    likes.className = 'likes';
    const filtered = [];
    likesArray.forEach((item) => {
      if (item.item_id === movie.id) filtered.push(item);
    });
    likes.textContent = filtered[0]?.likes || 0 ;
    likesContainer.append(likes, thumbsUp)
    
    thumbsUp.addEventListener('click', () => {
      postLikes(movie.id);
      likes.textContent = Number(likes.textContent) + 1;
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttons';

    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.textContent = 'Comments';
    commentButton.className = 'comment';
    commentButton.addEventListener('click', () => loadPopup(commentButton));

    const reservationButton = document.createElement('button');
    reservationButton.type = 'button';
    reservationButton.textContent = 'Reservation';
    reservationButton.className = 'reservation';
    reservationButton.addEventListener('click', () => loadPopup(reservationButton));

    buttonContainer.append(commentButton, reservationButton);
    card.append(cardImage, cardTitle, likesContainer, buttonContainer);
    movies.append(card);
  });
};

export default renderMovies;