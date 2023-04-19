import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopularMovies = ({ onPopular }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      //   const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=190cad72b06b0abd09dc8daf263c39fb`
      );

      setMovies(response.data.results);
    };

    fetchMovies();
  }, [onPopular]);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularMovies;
