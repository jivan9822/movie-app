import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DisplayMoviesHelper from './DisplayMoviesHelper';

const DisplayMovies = ({ heading }) => {
  const [movies, setMovies] = useState([]);
  const data = useSelector((state) => state);

  useEffect(() => {
    if (Object.keys(data.movies).length > 0) {
      setMovies(data.movies);
    }
  }, [data]);

  if (Object.keys(movies).length === 0) {
    return <h1>Loading</h1>;
  }

  return <DisplayMoviesHelper movies={movies[heading]} heading={heading} />;
};

export default DisplayMovies;
