import appID from "./AppID.js";
import getTimeSpan from "./convertDate.js";

const loadComments = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${id}`);
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
          if (comments.length) {
            comments.reverse();

            comments?.forEach(comment => {
              const listItem = document.createElement('li');
              listItem.className = 'comment';

              const date = document.createElement('time');
              date.innerText = getTimeSpan(comment.creation_date, new Date());
              date.dateTime = comment.creation_date;
              const user = document.createElement('div');
              user.innerText = comment.username;
              const message = document.createElement('div');
              message.innerText = comment.comment;

              listItem.append(date, user, message)
              commentsUI.append(listItem)
            })
          }
        })
    })
  })
}

export {
  addComments,
  loadComments
}