import appID from './AppID.js';

const postComment = async (id, user, message) => {
  const ID = appID;

  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ID}/comments`,
    {
      body: JSON.stringify(
        {
          item_id: id,
          username: user,
          comment: message,
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
  const ID = appID;

  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ID}/reservations`,
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