import { postComment } from './fetchAppInfo.js';
import { getCommentCounter } from './Counters.js';
//

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

export { handleCommentSubmit };