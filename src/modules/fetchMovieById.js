import '@fortawesome/fontawesome-free/js/all.js';
import {
  handleCommentSubmit
} from './handleSubmit';
import loadComments from './loadComments';

const fetchMovie = async (button) => {
  const index = button.closest('.card').getAttribute('data-index');

  const data = await fetch(`https://api.tvmaze.com/shows/${index}`);
  const movie = await data.json();
  // display popup
  const commentPopup = document.getElementById('comment-popup');
  const reservationsPopup = document.getElementById('reservations-popup');

  commentPopup.innerHTML = ''
  reservationsPopup.innerHTML = ''

  const popupback = document.getElementById('popup-back');
  const popupback1 = document.getElementById('popup-back2');

  const popupClose = document.createElement('span');
  popupClose.className = 'popup-close';
  popupClose.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  const popupimg = document.createElement('img');
  popupimg.className = 'popup-img';
  popupimg.src = movie.image.medium;

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const popupTitle = document.createElement('h2');
  popupTitle.textContent = movie.name;
  const popupdes = document.createElement('div');
  popupdes.innerHTML = movie.summary;

  const popupComment = document.createElement('div');
  popupComment.className = 'popup-comments'

  const commentHeader = document.createElement('h2')
  commentHeader.innerHTML = 'Comments'
  const commentContent = document.createElement('div')

  popupComment.append(commentHeader, commentContent)

  const popupCommentArray = await loadComments(index);

  if (popupCommentArray.length) {
    const commentContentlist = document.createElement('ul');
    popupCommentArray.forEach(comment => {
      const commentItem = document.createElement('li');

      const date = document.createElement('span')
      date.innerText = comment.creation_date
      const name = document.createElement('span')
      name.innerText = `, ${comment.username}: `
      const text = document.createElement('span')
      text.innerText = comment.comment

      commentItem.append(date, name, text)
      commentContentlist.append(commentItem)
    })
    commentContent.append(commentContentlist)
  }


  const popupForm = document.createElement('form');
  popupForm.method = 'post'
  popupForm.onsubmit = handleCommentSubmit;

  const popupFormHead = document.createElement('h2')
  popupFormHead.innerText = 'Write A Comment'
  const popupInput1 = document.createElement('input')
  popupInput1.name = 'name'
  popupInput1.placeholder = 'Name'
  const popupInput2 = document.createElement('input')
  popupInput2.name = 'comment'
  popupInput2.placeholder = 'Write a Comment...'
  const popupSubmit = document.createElement('button')
  popupSubmit.type = 'submit'
  popupSubmit.innerText = 'Submit'

  popupForm.append(popupInput1, popupInput2, popupSubmit)
  popupContent.append(popupTitle, popupdes, popupComment, popupForm);


  if (button.className === 'comment') {
    // If comment popup is clicked
    commentPopup.append(popupClose, popupimg, popupContent);
    popupback.classList.toggle('active')
    popupClose.addEventListener('click', () => {
      commentPopup.innerHTML = ''
      popupback.classList.toggle('active')
    })
  } else {
    // If reservations popup is clicked
    reservationsPopup.append(popupClose, popupimg, popupContent);
    popupback1.classList.toggle('active')
    popupClose.addEventListener('click', () => {
      reservationsPopup.innerHTML = ''
      popupback1.classList.toggle('active')
    })
  }
}


export default fetchMovie