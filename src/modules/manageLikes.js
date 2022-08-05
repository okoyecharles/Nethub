import appID from './AppID';

const ID = appID;
const postLikes = async (id) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ID}/likes`,
    {
      body: JSON.stringify(
        {
          item_id: id,
        },
      ),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
};

const getLikes = async () => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ID}/likes`);

  const data = await res.json();
  return data;
};

export { postLikes, getLikes };