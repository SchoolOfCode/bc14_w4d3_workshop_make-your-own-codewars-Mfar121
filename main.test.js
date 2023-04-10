// import the jest testing library
import { test, expect } from '@jest/globals';
// import the function to be tested
import { calculateRuntime } from './main.js';
// write array for the length of the movies
const movies = [  { title: 'Reservoir Dogs', runtime: 99 },  { title: 'Pulp Fiction', runtime: 154 },  { title: 'Jackie Brown', runtime: 154 },  { title: 'Kill Bill Vol. 1', runtime: 111 },  { title: 'Kill Bill Vol. 2', runtime: 137 },  { title: 'Death Proof', runtime: 113 },  { title: 'Inglourious Basterds', runtime: 153 },  { title: 'Django Unchained', runtime: 165 },  { title: 'The Hateful Eight', runtime: 187 }];

// write the test suite
function calculateRuntime(movie1, movie2, movie3) {
  const totalRuntime = [movie1, movie2, movie3].reduce((total, movie) => total + movie.runtime, 0);
  return `${movie1.title}, ${movie2.title}, and ${movie3.title} have a total runtime of ${totalRuntime} minutes.`;
}

justJesting('calculateRuntime', () => {
  test('should return the correct runtime for Reservoir Dogs, Kill Bill Vol. 1, and Death Proof', () => {
    expect(calculateRuntime(movies[0], movies[3], movies[5])).toEqual('Reservoir Dogs, Kill Bill Vol. 1, and Death Proof have a total runtime of 323 minutes.');
  });

  test('should return the correct runtime for Pulp Fiction, Kill Bill Vol. 2, and Django Unchained', () => {
    expect(calculateRuntime(movies[1], movies[4], movies[7])).toEqual('Pulp Fiction, Kill Bill Vol. 2, and Django Unchained have a total runtime of 456 minutes.');
  });

  test('should return the correct runtime for Jackie Brown, Inglourious Basterds, and The Hateful Eight', () => {
    expect(calculateRuntime(movies[2], movies[6], movies[8])).toEqual('Jackie Brown, Inglourious Basterds, and The Hateful Eight have a total runtime of 494 minutes.');
  });

  test('should handle empty input correctly', () => {
    expect(() => calculateRuntime()).toThrow();
  });
});



