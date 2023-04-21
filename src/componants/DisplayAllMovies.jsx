import DisplayMovies from './DisplayMovies';

const DisplayAllMovies = (props) => {
  return (
    <div>
      <DisplayMovies heading={'now_playing'} />
      <DisplayMovies heading={'popular'} />
      <DisplayMovies heading={'top_rated'} />
      <DisplayMovies heading={'upcoming'} />
    </div>
  );
};
export default DisplayAllMovies;
