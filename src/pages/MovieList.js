import { MovieList } from '../components/MovieList';
import { getProducts } from '../FakeAPI.js';

export const Movies = () => {
  const movies = getProducts();
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};
