import convertRating from './convertRating.js';
import { handleCommentSubmit } from './handleSubmit.js';
import handleInfo from './infoOps.js';
import { addComments } from './loadComments.js';
import { getLikes, postLikes } from './manageLikes.js';

const renderMovies = async (data) => {
  const body = document.querySelector('body');
  const movieGrid = document.querySelector('[data-movie-grid]');
  const likesArray = await getLikes();
  const popup = document.querySelector('[data-comment-popup]');
  const commmentPopupForm = document.querySelector('[data-comment-popup-form]');
  popup.firstElementChild.firstElementChild.addEventListener('click', () => {
    popup.classList.remove('active');
    body.style.overflow = 'visible';
  });

  movieGrid.innerHTML = '';

  // Renders all the Movies
  data.forEach((movie) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card__container';
    cardContainer.setAttribute('data-index', `${movie.id}`);
    cardContainer.style.background = `url(${movie.image.medium})`;
    cardContainer.style.backgroundSize = 'cover';

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
    const [likesArrayFiltered] = likesArray.filter((item) => item.item_id === movie.id);
    likesCount.className = 'like__count';
    likesCount.textContent = `${likesArrayFiltered?.likes ?? 0} likes`;

    const commentsCount = document.createElement('div');
    commentsCount.className = 'comment__count';
    commentsCount.innerHTML = convertRating(movie.rating.average);

    const cardButtons = document.createElement('div');
    cardButtons.className = 'card__buttons';

    const likeButton = document.createElement('button');
    likeButton.type = 'button';
    likeButton.className = 'like__button';
    likeButton.innerHTML = '<span>Like</span><i class="fa-solid fa-thumbs-up"></i>';
    likeButton.addEventListener('click', (e) => {
      postLikes(parseInt(e.target.closest('.card__container').dataset.index));
      const prevLikes = parseInt(e.target.closest('.card__buttons').previousSibling.firstChild.innerHTML.slice(0, -6));
      e.target.closest('.card__buttons').previousSibling.firstChild.innerHTML = `${prevLikes + 1} likes`;
      e.target.closest('.like__button').firstChild.innerHTML = 'Liked';
    }, { once: true });

    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.className = 'comment__button';
    commentButton.dataset.commentButtonIndex = movie.id;
    commentButton.innerHTML = '<span>Comment</span><i class="fa-solid fa-comment"></i>';
    commentButton.addEventListener('click', (e) => {
      popup.classList.add('active');
      popup.dataset.commentPopupIndex = e.target.closest('.comment__button').dataset.commentButtonIndex;

      if (popup.classList.contains('active')) {
        body.style.overflow = 'hidden';
      }
    });

    const cardInfo = document.createElement('i');
    cardInfo.className = 'fa-solid fa-circle-info card__info';
    cardInfo.onclick = handleInfo;

    const cardDescription = document.createElement('p');
    cardDescription.innerText = movie.summary;
    cardDescription.style.display = 'none';

    // Append Children
    cardCount.append(likesCount, commentsCount);
    cardButtons.append(likeButton, commentButton);
    cardContent.append(cardTitle, cardCount, cardButtons);
    card.append(cardContent, cardInfo, cardDescription);
    cardContainer.append(card);

    movieGrid.append(cardContainer);
  });

  addComments();
  commmentPopupForm.onsubmit = handleCommentSubmit;
};

export default renderMovies;