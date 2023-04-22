import classes from './popmov.module.css';

const DisplayMoviesHelper = ({ movies, heading }) => {
  return (
    <div className={classes.container}>
      <h2>{heading?.split('_').join(' ').toUpperCase()}</h2>
      <div className={classes.mainContent}>
        {movies.length &&
          movies.map((movie) => (
            <div key={movie.id} className={classes.sunDiv}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                    : 'https://via.placeholder.com/500x750.png?text=Poster+Not+Available'
                }
                alt={movie.title}
              />
              <h4>{movie.title}</h4>
              <p className={classes.textCont}>{movie.release_date}</p>
              <p className={classes.textCont}>{movie.overview.slice(0, 100)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayMoviesHelper;
