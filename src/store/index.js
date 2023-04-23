import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// Array of four field to display on user request
const MOVIE_TYPES = ['now_playing', 'popular', 'top_rated', 'upcoming'];
const apiKey = import.meta.env.VITE_API_KEY;

// Function get movie data as per request type from above array
const getMovieData = async (movieType) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieType}?api_key=${apiKey}`
  );
  return response.data.results;
};

// Fetching movies from above function and storing to movies Object
const fetchMovies = async () => {
  const movies = {};
  for (const movieType of MOVIE_TYPES) {
    movies[movieType] = await getMovieData(movieType);
  }
  return movies;
};

// This redux reducer function
const movieReducer = (state = { movies: {}, searchMovies: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: payload,
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        searchMovies: payload,
      };
    default:
      return state;
  }
};

const store = createStore(movieReducer, applyMiddleware(thunk));

// Function to update movies data
const updateMovies = async () => {
  try {
    const newMovies = await fetchMovies(); // Collecting movies
    store.dispatch({ type: 'FETCH_MOVIES', payload: newMovies }); // storing in redux store
  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};

updateMovies(); // fetch movies on startup

setInterval(updateMovies, 10 * 60 * 1000); // fetch movies every 10 minutes

export const searchMovies = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      dispatch({ type: 'SEARCH_MOVIES', payload: response.data.results });
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  };
};

// exporting store
export default store;
