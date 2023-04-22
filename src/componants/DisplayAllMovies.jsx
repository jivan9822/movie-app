import DisplayMovies from './DisplayMovies';

const DisplayAllMovies = ({ choice }) => {
  return (
    <div>
      <DisplayMovies heading={choice} />
    </div>
  );
};
export default DisplayAllMovies;
