import { postComment, postReservation } from './fetchAppInfo.js';
import { getCommentCounter, getReservationCounter } from './Counters.js';

const handleReservationSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const username = form.elements.username.value;
  const dateStart = form.elements.date_start.value;
  const dateEnd = form.elements.date_end.value;
  const movieID = form.previousSibling.dataset.popupIndex;

  if (!form.previousSibling.children[1].children[0]) {
    const list = document.createElement('ul');
    form.previousSibling.children[1].append(list);
  }

  const newReservation = document.createElement('li');
  newReservation.innerText = `${dateStart} - ${dateEnd} by ${username}`;
  form.previousSibling.children[1].children[0].append(newReservation);

  if (dateStart && dateEnd && username) {
    await postReservation(movieID, dateStart, dateEnd, username);
    // Update Reservation Counter
    const counter = await getReservationCounter(movieID);
    form.previousSibling.children[0].innerText = `Reservations (${counter})`;
  }

  form.elements.username.value = '';
  form.elements.date_start.value = '';
  form.elements.date_end.value = '';
};

const handleCommentSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const name = form.elements.name.value;
  const comment = form.elements.comment.value;
  const movieID = form.previousSibling.dataset.popupIndex;

  if (!form.previousSibling.children[1].children[0]) {
    const list = document.createElement('ul');
    form.previousSibling.children[1].append(list);
  }

  const newComment = document.createElement('li');
  newComment.innerText = `Now , ${name} : ${comment}`;
  form.previousSibling.children[1].children[0].append(newComment);

  if (name && comment) {
    await postComment(movieID, name, comment);
    // Update Comment Counter
    const counter = await getCommentCounter(movieID);
    form.previousSibling.children[0].innerText = `Comments (${counter})`;
  }

  form.elements.name.value = '';
  form.elements.comment.value = '';
};

export { handleCommentSubmit, handleReservationSubmit };