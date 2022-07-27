import '@fortawesome/fontawesome-free/js/all.js';

const fetchMovie = async (button) => {
  const index = button.closest('.card').getAttribute('data-index');

  const data = await fetch(`https://api.tvmaze.com/shows/${index}`);
  const movie = await data.json();
  // display popup
  const commentPopup = document.getElementById('comment-popup');
  const reservationsPopup = document.getElementById('reservations-popup');
  const popupback = document.getElementById('popup-back');
  const popupback1 = document.getElementById('popup-back2');
  
 const popupClose = document.createElement('span');
  popupClose.className = 'popup-close';
  popupClose.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  
  const popupimg = document.createElement('img');
  popupimg.className = 'popup-img';
  popupimg.src = movie.image.medium;

  const poupContent = document.createElement('div');
  poupContent.className = 'popup-content';

  const popupTitle = document.createElement('h2');
  popupTitle.textContent = movie.name;
  const popupdes = document.createElement('div');
  popupdes.innerHTML = movie.summary;

  poupContent.append(popupTitle, popupdes);

 
  if (button.className === 'comment') {
    // If comment popup is clicked
    commentPopup.append(popupClose, popupimg, poupContent);
    popupback.classList.toggle('active')
    popupClose.addEventListener('click', () => {
      commentPopup.innerHTML = ''
      popupback.classList.toggle('active')
    })
  } else {
    // If reservations popup is clicked
    reservationsPopup.append(popupClose, popupimg, poupContent);
    popupback1.classList.toggle('active')
    popupClose.addEventListener('click', () => {
      reservationsPopup.innerHTML = ''
      popupback1.classList.toggle('active')
    })
  }
}


export default fetchMovie