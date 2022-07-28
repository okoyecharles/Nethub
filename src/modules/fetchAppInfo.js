const postComment = async (id, user, comment) => {
  const appID = 'hmHPRyTIRRJiq4ZsoTAe';

  const data = await fetch(
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

const postReservation = async (id, date_start, date_end, username) => {
  const appID = "hmHPRyTIRRJiq4ZsoTAe";

  const data = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/reservations`,
    {
      body: JSON.stringify({
        item_id: id,
        username: username,
        date_start: date_start,
        date_end: date_end,
      }),
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export { postComment, postReservation };