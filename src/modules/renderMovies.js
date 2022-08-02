import loadPopup from './loadPopup.js';
import { getLikes, postLikes } from './manageLikes.js'; 

const renderMovies = async (data) => {
  const movieGrid = document.querySelector('[data-movie-grid]');
  const likesArray = await getLikes(); //////

  // Renders all the Movies
  data.forEach((movie) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card__container';
    cardContainer.setAttribute('data-index', `${movie.id}`);
    cardContainer.style.background =  `url(${movie.image.medium})`;

    const card = document.createElement('div');
    card.className = 'card';

    const cardContent = document.createElement('div');
    cardContent.className = 'card__content';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card__title';
    cardTitle.textContent = movie.name;

    const cardCount = document.createElement('div');
    cardCount.className = 'card__count';

    const likesCount = document.createElement('div');
    likesCount.className = 'like__count';
    likesCount.textContent = '8 likes';

    const commentsCount = document.createElement('div');
    commentsCount.className = 'comment__count';
    commentsCount.textContent = '5 comments';

    const cardButtons = document.createElement('div');
    cardButtons.className = 'card__buttons';

    const likeButton = document.createElement('button');
    likeButton.type = 'button';
    likeButton.className = 'like__button';
    likeButton.innerHTML = '<span>Like</span><i class="fa-solid fa-thumbs-up"></i>';

    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.className = 'comment__button';
    commentButton.innerHTML = '<span>Comment</span><i class="fa-solid fa-comment"></i>';

    // Append Children
    cardCount.append(likesCount, commentsCount)
    cardButtons.append(likeButton, commentButton)
    cardContent.append(cardTitle, cardCount, cardButtons)
    card.append(cardContent)
    cardContainer.append(card)

    movieGrid.append(cardContainer)
  });
};

export default renderMovies;