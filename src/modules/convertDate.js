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

export default getTimeSpan;