
const renderMovies = (data) => {
    const moviesSection = document.querySelector('.MoviesContent');
    data.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        moviesSection.append(card);
        const img = document.createElement('img');
        img.className = 'imgMovie';
        img.src = movie.image.medium;
        img.alt = movie.name;
        const title = document.createElement('h3');
        title.className = 'cardTitle';
        title.textContent = movie.name;
        const buttons = document.createElement('div');
        buttons.className = 'buttons';
        card.append(img, title, buttons);
        const comments = document.createElement('button');
        comments.type = 'button';
        comments.textContent = 'Comments'
        const Reservation = document.createElement('button');
        Reservation.type = 'button';
        Reservation.textContent = 'Reservation'
        buttons.append(comments, Reservation);
        
    });
}

export default renderMovies;