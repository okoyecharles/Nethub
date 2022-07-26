const fetchMovie = async (button) => {
  const index = button.closest('.card').getAttribute('data-index');

  const data = await fetch(`https://api.tvmaze.com/shows/${index}`);
  const movie = await data.json();

  console.log(movie);

  // display popup
  const popup = document.getElementById('comment-popup');

  const popupClose = document.createElement('span');
  popupClose.className = 'popup-close';
  popupClose.innerHTML = 'x';

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
  popup.append(popupClose, popupimg, poupContent);
}


export default fetchMovie