/** @jest-environment jsdom */

import fetchMock from 'fetch-mock';
import { getCommentCounter } from '../modules/Counters';

test('get number of comments', async () => {
  // arrange
  const index = 1;

  // act
  fetchMock.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/comments?item_id=${index}`, { user: 'Charles', comment: 'Jest is Working.' });

  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/comments?item_id=${index}`);
  const comments = await data.json();
  const commentCount = comments.length;

  // assert
  const functionCount = await getCommentCounter(index);
  expect(functionCount).toBe(commentCount);
});
