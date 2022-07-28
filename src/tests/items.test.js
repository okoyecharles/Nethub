/**
 * @jest-environment jsdom
 */
/** @jest-environment jsdom */

import fetchMock from 'fetch-mock';
import { getMoviesCounter } from '../modules/Counters';

test('get number of comments', async () => {
  // arrange
  const index = 1;

  // act
  fetchMock.get('https://api.tvmaze.com/shows',
    [
      { name: 'Movie1', genre: 'Comedy' },
      { name: 'Movie2', genre: 'Action' },
    ]);

  const data = await fetch('https://api.tvmaze.com/shows');
  const movies = await data.json();
  const moviesCount = movies.length;

  // assert
  const functionCount = await getMoviesCounter();
  expect(functionCount).toBe(moviesCount);
});
