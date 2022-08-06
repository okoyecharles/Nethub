import { postComment } from './fetchAppInfo.js';

const handleCommentSubmit = async (e) => {
  // return false
  e.preventDefault();

  const form = e.target;
  let name = form.elements.username.value;
  const comment = form.elements.comment.value;
  const movieID = form.parentElement.parentElement.dataset.commentPopupIndex;

  name = name.replace(/\s/g, '').length ? name : name = 'Anonymous';

  const newComment = document.createElement('li');
  const dateUI = document.createElement('span');
  dateUI.innerText = 'Now';
  const nameUI = document.createElement('div');
  nameUI.innerHTML = name;
  const messageUI = document.createElement('div');
  messageUI.innerHTML = comment;
  newComment.append(dateUI, nameUI, messageUI);

  form.previousElementSibling.prepend(newComment);

  if (name && comment) {
    await postComment(movieID, name, comment);
  }

  form.elements.username.value = '';
  form.elements.comment.value = '';
};

export default handleCommentSubmit;