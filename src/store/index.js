import { createStore } from 'redux';
import axios from 'axios';
const api_key = import.meta.env.VITE_API_KEY;

const getMovieData = () => {};

const movieReducer = (state = { api_key }, action) => {
  const { type, payload } = action;
  if (type === 'GET_KEY') {
    return {
      API_KEY: state.api_key,
    };
  }
  return state;
};

const store = createStore(movieReducer);
export default store;
