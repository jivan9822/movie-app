import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DisplayMoviesHelper from './DisplayMoviesHelper';

// This object created for converting request heading
let movie = {
  'Now Playing': 'now_playing',
  Popular: 'popular',
  'Top Rated': 'top_rated',
  'Up Coming': 'upcoming',
};

// Display movie component
const DisplayMovies = ({ heading }) => {
  if (movie[heading]) {
    heading = movie[heading];
  }

  const [movies, setMovies] = useState([]);

  // Getting movie data from redux store
  const data = useSelector((state) => state);

  // Use effect hook will run if any data update done
  useEffect(() => {
    if (Object.keys(data.movies).length > 0) {
      setMovies(data.movies);
    }
  }, [data]);

  // Handling delay in fetching from store in some case
  if (Object.keys(movies).length === 0) {
    return <h1>Loading</h1>;
  }

  return <DisplayMoviesHelper movies={movies[heading]} heading={heading} />;
};

export default DisplayMovies;
