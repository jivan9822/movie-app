import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DisplayMoviesHelper from './DisplayMoviesHelper';
import store from '../store';

const DisplayMovies = ({ onPopular, heading }) => {
  const [movies, setMovies] = useState([]);
  const api_key = useSelector((state) => state.api_key);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${heading}?api_key=${api_key}`
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
