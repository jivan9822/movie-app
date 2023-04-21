import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DisplayMoviesHelper from './DisplayMoviesHelper';

const DisplayMovies = ({ onPopular, heading }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${heading}?api_key=190cad72b06b0abd09dc8daf263c39fb`
      );
      if (response) {
        setMovies(response.data.results);
      }
    };

    fetchMovies();
  }, [onPopular]);

  return (
    <div>
      <DisplayMoviesHelper movies={movies} heading={heading} />
    </div>
  );
};

export default DisplayMovies;
