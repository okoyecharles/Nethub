import { postComment } from './fetchAppInfo.js';

const handleCommentSubmit = async (e) => {
  e.preventDefault();
  console.log('hey')

  const form = event.target;
  const name = form.elements.username.value;
  const comment = form.elements.comment.value;
  const movieID = form.parentElement.parentElement.dataset.commentPopupIndex;

  name.replace(' ', /\s/g).length ? name : name = 'Anonymous';
  console.log(name);

  const newComment = document.createElement('li');
  const nameUI = document.createElement('div');
  nameUI.innerHTML = name;
  const messageUI = document.createElement('div');
  messageUI.innerHTML = comment;
  newComment.append(nameUI, messageUI)

  form.previousElementSibling.append(newComment);

  if (name && comment) {
    await postComment(movieID, name, comment);
  }

  form.elements.name.value = '';
  form.elements.comment.value = '';
};

export { handleCommentSubmit };