/** @jest-environment jsdom */

import fetchMock from "fetch-mock";
import { getReservationCounter } from "../modules/Counters";


test("get number of reservations", async () => {
  // arrange
  const index = 1;

  // act
  fetchMock.get(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/reservations?item_id=${index}`,
    { date_start: "2020-01-01", date_end: "2020-02-02.", username: "Testing" }
  );

  const data = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/reservations?item_id=${index}`
  );
  const reservations = await data.json();
  const reservationCount = reservations.length;

  // assert
  const functionCount = await getReservationCounter(index);
  expect(functionCount).toBe(reservationCount);
});
