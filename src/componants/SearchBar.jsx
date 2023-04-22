import axios from 'axios';
import React, { useState } from 'react';
import DisplayMoviesHelper from './DisplayMoviesHelper';
import classes from './popmov.module.css';

const SearchBar = ({ onSearch }) => {
  const api_key = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  function handleEscape(event) {
    if (event.key === 'Escape') {
      // handle the Escape key press here
      onSearch(null);
      setQuery('');
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
    );
    // setResults(response.data.results);
    onSearch({ movies: response.data.results, query });
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formSearch}>
        <input
          type='text'
          placeholder='Search for a movie...'
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleEscape}
          autoFocus
        />
        <button type='submit'>Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
