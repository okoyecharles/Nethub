// get all reservations
const loadReservations = async (id) => {
  const data = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/reservations?item_id=${id}`,
  );
  const reservations = await data.json();

  return reservations;
};

export default loadReservations;

// post reservation using fetch
