import DisplayMovies from './DisplayMovies';

const DisplayAllMovies = ({ choice }) => {
  return (
    <div>
      <DisplayMovies heading={choice} />
      {/* <DisplayMovies heading={'popular'} />
      <DisplayMovies heading={'top_rated'} />
      <DisplayMovies heading={'upcoming'} /> */}
    </div>
  );
};
export default DisplayAllMovies;
