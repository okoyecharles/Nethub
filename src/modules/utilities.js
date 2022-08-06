const convertRating = (num) => {
  let rawRating = num;
  if (!rawRating) rawRating = 1;

  let convertedRating = (Math.floor(rawRating / 2 * 10));
  let remainder = convertedRating % 10;
  convertedRating -= remainder;
  let stars = new Array(convertedRating / 10).fill('<i class="fa-solid fa-star"></i>').join('');
  remainder === 0 ? remainder = 0 : remainder > 5 ? remainder = 10 : remainder = 5;
  convertedRating += remainder;
  convertedRating /= 10;

  if (remainder) stars += ('<i class="fa-solid fa-star-half"></i>');

  return stars;
};

const getTimeSpan = (postedDate, currentDate) => {
  const d1 = postedDate.split('-');
  const d2 = currentDate.toJSON().slice(0, 10).split('-');

  const mainDate = [(d2[0] - d1[0]), (d2[1] - d1[1]), (d2[2] - d1[2])];
  let [year, month, day] = mainDate;
  day += month * 30;
  day += year * 365;

  const date = (day / 365 > 1) ? `${Math.floor(day / 365)} year ago`
    : (day / 30 > 1) ? `${Math.floor(day / 30)} month ago`
      : (day === 0) ? 'Today'
        : `${day} day ago`;

  return date;
};

const capitalize = (string) => {
  string = string.toLowerCase()
  if (string === 'science-fiction') return 'Science-Fiction';
  const first = string[0].toUpperCase();
  const last = string.slice(1, );
  const res = first + last;
  return res
}

export {convertRating, getTimeSpan, capitalize}