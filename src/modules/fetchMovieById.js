import '@fortawesome/fontawesome-free/js/all.js';
import {
  handleCommentSubmit,
} from './handleSubmit';
import loadComments from './loadComments';
import loadReservations from './loadReservations';

const fetchMovie = async (button) => {
  const index = button.closest('.card').getAttribute('data-index');

  const data = await fetch(`https://api.tvmaze.com/shows/${index}`);
  const movie = await data.json();
  // display popup
  const commentPopup = document.getElementById('comment-popup');
  const reservationsPopup = document.getElementById('reservations-popup');

  commentPopup.innerHTML = '';
  reservationsPopup.innerHTML = '';

  const popupContC = document.getElementById('popup-back');
  const popupContR = document.getElementById('popup-back2');

  // SHARED CONTENTS
  const popupClose = document.createElement('span');
  popupClose.className = 'popup-close';
  popupClose.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  const popupimg = document.createElement('img');
  popupimg.className = 'popup-img';
  popupimg.src = movie.image.medium;

  const popupTitle = document.createElement('h2');
  popupTitle.textContent = movie.name;

  const popupdes = document.createElement('div');
  popupdes.innerHTML = movie.summary;
  // END OF SHARED CONTENTS

  // COMMENT SECTION CONTAINER
  const popupCommentContainer = document.createElement('div');
  popupCommentContainer.className = 'popup-comment-container';

  const popupComment = document.createElement('div');
  popupComment.dataset.popupIndex = index;
  popupComment.className = 'comments';

  const popupCommentHeader = document.createElement('h2');
  popupCommentHeader.innerHTML = 'Comments';

  const popupCommentContent = document.createElement('div');

  const popupCommentArray = await loadComments(index);

  if (popupCommentArray.length) {
    const popupCommentContentlist = document.createElement('ul');
    popupCommentArray.forEach((comment) => {
      const commentItem = document.createElement('li');

      const date = document.createElement('span');
      date.innerText = comment.creation_date;
      const name = document.createElement('span');
      name.innerText = `, ${comment.username}: `;
      const text = document.createElement('span');
      text.innerText = comment.comment;

      commentItem.append(date, name, text);
      popupCommentContentlist.append(commentItem);
    });
    popupCommentContent.append(popupCommentContentlist);
  }

  const popupFormComment = document.createElement('form');
  popupFormComment.method = 'post';
  popupFormComment.onsubmit = handleCommentSubmit;

  const commentFormHead = document.createElement('h2');
  commentFormHead.innerText = 'Write A Comment';
  const popupInput1 = document.createElement('input');
  popupInput1.name = 'name';
  popupInput1.placeholder = 'Name';
  const popupInput2 = document.createElement('input');
  popupInput2.name = 'comment';
  popupInput2.placeholder = 'Write a Comment...';
  const popupSubmit = document.createElement('button');
  popupSubmit.type = 'submit';
  popupSubmit.innerText = 'Submit';

  popupComment.append(popupCommentHeader, popupCommentContent);
  popupFormComment.append(popupInput1, popupInput2, popupSubmit);
  popupCommentContainer.append(popupComment, popupFormComment);

  // RESERVATIONS SECTION
  const popupReservationContainer = document.createElement('div');
  popupReservationContainer.className = 'popup-reservation-container';

  const popupReservation = document.createElement('div');
  popupReservation.className = 'reservations';

  const popupReservationHeader = document.createElement('h2');
  popupReservationHeader.innerHTML = 'Reservations';

  const popupReservationContent = document.createElement('div');

  const popupReservationArray = await loadReservations(index);
  console.log(popupReservationArray);

  if (popupReservationArray.length) {
    const popupReservationContentlist = document.createElement('ul');
    popupReservationArray.forEach((reservation) => {
      const reservationItem = document.createElement('li');

      const dateStart = document.createElement('span');
      dateStart.innerText = reservation.date_start;
      const dateEnd = document.createElement('span');
      dateEnd.innerText = reservation.date_end;
      const userName = document.createElement('span');
      userName.innerText = reservation.username;

      reservationItem.append(dateStart, dateEnd, userName);
      popupReservationContentlist.append(reservationItem);
    });
    popupReservationContent.append(popupReservationContentlist);
  }

  popupReservation.append(popupReservationHeader, popupReservationContent);
  popupReservationContainer.append(popupReservation);

  if (button.className === 'comment') {
    // If comment popup is clicked
    commentPopup.append(popupClose, popupimg, popupTitle, popupdes, popupCommentContainer);
    popupContC.classList.toggle('active');
    popupClose.addEventListener('click', () => {
      commentPopup.innerHTML = '';
      popupContC.classList.toggle('active');
    });
  } else {
    // If reservations popup is clicked
    reservationsPopup.append(popupClose, popupimg, popupTitle, popupdes, popupReservationContainer);
    popupContR.classList.toggle('active');
    popupClose.addEventListener('click', () => {
      reservationsPopup.innerHTML = '';
      popupContR.classList.toggle('active');
    });
  }
};

export default fetchMovie;