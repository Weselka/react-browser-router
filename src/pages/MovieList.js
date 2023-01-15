import { MovieList } from 'components';
import { getProducts } from '../FakeAPI.js';

export const Movies = () => {
  const movies = getProducts();
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};
