const handleInfo = (e) => {
  const dataHeader = e.target.previousSibling.children[0].innerText;
  const dataDescription = e.target.nextSibling.innerText;
  const infoPopup = document.querySelector('[data-info-popup]');
  const header = infoPopup.firstElementChild.children[2].firstElementChild;
  const description = infoPopup.firstElementChild.children[2].children[1];
  const closeButton = infoPopup.firstElementChild.children[0];

  header.innerHTML = dataHeader;
  description.innerHTML = dataDescription;

  closeButton.addEventListener('click', () => infoPopup.classList.remove('active'), { once: true });
  infoPopup.classList.add('active');
};

export default handleInfo;