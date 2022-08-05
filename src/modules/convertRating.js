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

export default convertRating;