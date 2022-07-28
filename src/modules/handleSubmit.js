import { postComment } from './fetchAppInfo';
//

const handleCommentSubmit = async (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const comment = event.target.elements.comment.value;

  const ID = event.target.previousSibling.dataset.popupIndex;

  if (!event.target.previousSibling.children[1].children[0]) {
    const list = document.createElement('ul');
    event.target.previousSibling.children[1].append(list);
  }

  const newComment = document.createElement('li')
  newComment.innerText = `Now , ${name} : ${comment}`
  console.log(event.target.previousSibling.children[1])
  event.target.previousSibling.children[1].children[0].append(newComment)

  if (name && comment) {
    await postComment(ID, name, comment);
  }

  event.target.elements.name.value = ''
  event.target.elements.comment.value = ''
}

export  {handleCommentSubmit};