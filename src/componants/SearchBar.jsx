import axios from 'axios';
import React, { useRef, useState } from 'react';
import classes from './popmov.module.css';
import { searchMovies } from '../store';
import store from '../store';

const SearchBar = ({ onSearch }) => {
  const queryRef = useRef('');

  // If user hit Escape key the will show him default page
  function handleEscape(event) {
    if (event.key === 'Escape') {
      onSearch(null);
    }
  }

  // Here I am doing Api call for particular movie request not covered in store can do in store also to keep simple did here
  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = queryRef.current.value;
    // Dispatch the searchMovies action creator function
    await store.dispatch(searchMovies(query));
    const movies = store.getState().searchMovies;
    // Sending data to parent component
    onSearch({ movies, query });
    queryRef.current.value = '';
    queryRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formSearch}>
        <input
          ref={queryRef}
          type='text'
          placeholder='Search for a movie...'
          onKeyDown={handleEscape}
          autoFocus
        />
        <button type='submit'>Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
