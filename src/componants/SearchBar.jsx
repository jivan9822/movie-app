import axios from 'axios';
import React, { useState } from 'react';
import DisplayMoviesHelper from './DisplayMoviesHelper';
import classes from './popmov.module.css';

const SearchBar = ({ onSearch, onShow }) => {
  const api_key = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (!event.target.value.length) {
      onSearch(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSearch(false);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
    );
    setResults(response.data.results);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formSearch}>
      <input
        type='text'
        placeholder='Search for a movie...'
        value={query}
        onChange={handleInputChange}
      />
      <button type='submit'>Search</button>

      {!onShow && <DisplayMoviesHelper movies={results} heading={query} />}
    </form>
  );
};

export default SearchBar;
