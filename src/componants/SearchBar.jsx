import axios from 'axios';
import React, { useState } from 'react';

const SearchBar = ({ onSearch, onShow }) => {
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
      `https://api.themoviedb.org/3/search/movie?api_key=190cad72b06b0abd09dc8daf263c39fb&query=${query}`
    );

    setResults(response.data.results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search for a movie...'
        value={query}
        onChange={handleInputChange}
      />
      <button type='submit'>Search</button>

      {!onShow &&
        results.map((result) => (
          <div key={result.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${result.poster_path}`}
              alt={`${result.title} poster`}
            />
            <h2>{result.title}</h2>
            <p>{result.release_date}</p>
            <p>{result.overview}</p>
          </div>
        ))}
    </form>
  );
};

export default SearchBar;
