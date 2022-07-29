const appID = 'hmHPRyTIRRJiq4ZsoTAe';
const postLikes = async (id, likes) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`,
    {
      body: JSON.stringify(
        {
          item_id: id,
          likes,
        },
      ),
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
};

const getLikes = async () => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`);
  const data = await res.json();
  return data;
};

export { postLikes, getLikes };