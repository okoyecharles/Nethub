const postComment = async (id, user, comment) => {
  const appID = 'hmHPRyTIRRJiq4ZsoTAe';
  
  const data = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`,
    {
      body: JSON.stringify(
          {item_id: id,
          username: user,
          comment: comment}
      )
      ,
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  console.log(await data.text())
}

export {postComment}