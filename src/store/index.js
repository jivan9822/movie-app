import { createStore } from 'redux';
import axios from 'axios';

const MOVIE_TYPES = ['now_playing', 'popular', 'top_rated', 'upcoming'];

const getMovieData = async (movieType, apiKey) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieType}?api_key=${apiKey}`
  );
  return response.data.results;
};

const fetchMovies = async (apiKey) => {
  const movies = {};
  for (const movieType of MOVIE_TYPES) {
    movies[movieType] = await getMovieData(movieType, apiKey);
  }
  return movies;
};

const movieReducer = (state = { movies: {} }, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(movieReducer);

const updateMovies = async () => {
  try {
    const newMovies = await fetchMovies(import.meta.env.VITE_API_KEY);
    store.dispatch({ type: 'FETCH_MOVIES', payload: newMovies });
  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};

updateMovies(); // fetch movies on startup

setInterval(updateMovies, 10 * 60 * 1000); // fetch movies every 10 minutes

export default store;
