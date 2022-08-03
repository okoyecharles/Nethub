const searchOperations = () => {
  const searchInput = document.querySelector('[data-movie-search]')
  const noSearch = document.querySelector('[data-no-search]')
  searchInput.addEventListener('input', (e) => {
    const cards = document.querySelectorAll('.card__container')
    const query = e.target.value.toLowerCase().replace(/ /g, '')


    cards.forEach(card => {
      card.style.display = 'block';
      if (!card.firstChild.firstChild.firstChild.textContent.toLowerCase().replace(/ /g, '').includes(query)) {
        card.style.display = 'none';
      }
    })

    const noResults = Array.from(cards).every(card => card.style.display === 'none');

    if (noResults) {
      noSearch.style.opacity = '1';
      noSearch.style.height = '80vh';
    } else {
      noSearch.style.opacity = '0';
      noSearch.style.height = '0';
    }
  });
}

export default searchOperations;