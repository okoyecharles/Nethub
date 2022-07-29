/**
 * @jest-environment jsdom
*/

import fetchMock from 'fetch-mock';
import { getMoviesCounter } from '../modules/Counters.js';

test('get number of comments', async () => {
  // arrange
  fetchMock.get('https://api.tvmaze.com/shows',
    [
      { name: 'Movie1', genre: 'Comedy' },
      { name: 'Movie2', genre: 'Action' },
    ]);

  // act
  const data = await fetch('https://api.tvmaze.com/shows');
  const movies = await data.json();
  const moviesCount = movies.length;

  // assert
  const functionCount = await getMoviesCounter();
  expect(functionCount).toBe(moviesCount);
});
