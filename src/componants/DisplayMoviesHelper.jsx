import classes from './popmov.module.css';
import Slider from 'react-slick';

const DisplayMoviesHelper = ({ movies, heading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div>
      <h2 className={classes.heading}>{heading}</h2>
      <Slider {...settings} className={classes.slider}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '2px solid white' }}>
            <img
              className={classes.moviePoster}
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <p>{movie.overview.slice(0, 100)}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default DisplayMoviesHelper;
