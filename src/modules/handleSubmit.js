import { postComment } from "./fetchAppInfo";
//

const handleCommentSubmit = async (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const comment = event.target.elements.comment.value;

  await postComment()
}

export {handleCommentSubmit}