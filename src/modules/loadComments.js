const loadComments = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/comments?item_id=${id}`);
  const comments = await data.json();

  return comments;
};

const addComments = async () => {
  const commentButtons = document.querySelectorAll('.comment__button')
  commentButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = document.querySelector('[data-comment-popup]')
      const commentsUI = document.querySelector('.comments')
      commentsUI.innerHTML = '';
      loadComments(popup.dataset.commentPopupIndex)
      .then(data => {
        const comments = data;

        comments?.forEach(comment => {
          const listItem = document.createElement('li');
          listItem.className = 'comment';

          const user = document.createElement('div');
          user.innerText = comment.username;
          const message = document.createElement('div');
          message.innerHTML = comment.comment;

          listItem.append(user, message)
          commentsUI.append(listItem)
        })
      })
    })
  })
}

export { addComments, loadComments }