import { useRef, useState } from 'react';
import classes from './popmov.module.css';
import { useSwipeable } from 'react-swipeable';

const DisplayMoviesHelper = ({ movies, heading }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      setScrollPosition(scrollPosition + eventData.deltaX);
    },
  });

  return (
    <div>
      <h2 className={classes.heading}>{heading}</h2>
      <div className={classes.container} ref={containerRef}>
        <div
          className={classes.slider}
          style={{ transform: `translateX(${scrollPosition}px)` }}
          {...handlers}
        >
          {movies.length &&
            movies.map((movie) => (
              <div key={movie.id} className={classes.smallContainer}>
                <img
                  className={classes.moviePoster}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                      : 'https://via.placeholder.com/500x750.png?text=Poster+Not+Available'
                  }
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p className={classes.paraDetails}>
                  {movie.overview.slice(0, 100)}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayMoviesHelper;
