const getCommentCounter = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/comments?item_id=${id}`)
  const comments = await data.json();

  const counter = comments.length

  return counter;
}

export {getCommentCounter}