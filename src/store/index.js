import { createStore } from 'redux';
import axios from 'axios';

// Array of four field to display on user request
const MOVIE_TYPES = ['now_playing', 'popular', 'top_rated', 'upcoming'];

// Function get movie data as per request type from above array
const getMovieData = async (movieType, apiKey) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieType}?api_key=${apiKey}`
  );
  return response.data.results;
};

// Fetching movies from above function and storing to movies Object
const fetchMovies = async (apiKey) => {
  const movies = {};
  for (const movieType of MOVIE_TYPES) {
    movies[movieType] = await getMovieData(movieType, apiKey);
  }
  return movies;
};

// This redux reducer function
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

// Redux store
const store = createStore(movieReducer);

// Function to update movies data
const updateMovies = async () => {
  try {
    const newMovies = await fetchMovies(import.meta.env.VITE_API_KEY); // Collecting movies
    store.dispatch({ type: 'FETCH_MOVIES', payload: newMovies }); // storing in redux store
  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};

updateMovies(); // fetch movies on startup

setInterval(updateMovies, 10 * 60 * 1000); // fetch movies every 10 minutes

// exporting store
export default store;
