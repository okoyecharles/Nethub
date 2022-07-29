const postComment = async (id, user, comment) => {
  const appID = 'hmHPRyTIRRJiq4ZsoTAe';

  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`,
    {
      body: JSON.stringify(
        {
          item_id: id,
          username: user,
          comment,
        },
      ),
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

const postReservation = async (id, dateStart, dateEnd, username) => {
  const appID = 'hmHPRyTIRRJiq4ZsoTAe';

  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/reservations`,
    {
      body: JSON.stringify({
        item_id: id,
        username,
        date_start: dateStart,
        date_end: dateEnd,
      }),
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export { postComment, postReservation };