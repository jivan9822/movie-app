import DisplayMovies from './DisplayMovies';

// Simple display movie component receiving props of movie choice
const DisplayAllMovies = ({ choice }) => {
  return (
    <div>
      <DisplayMovies heading={choice} />
    </div>
  );
};
export default DisplayAllMovies;
