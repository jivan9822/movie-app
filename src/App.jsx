import SearchBar from './componants/SearchBar';
import { useState } from 'react';
import classes from './App.module.css';
import UserChoice from './componants/UserChoice';
import DisplayMoviesHelper from './componants/DisplayMoviesHelper';
import DisplayMovies from './componants/DisplayMovies';

function App() {
  const [search, setSearch] = useState(null); // Search text state
  const [userChoice, setUserChoice] = useState('now_playing'); // User choice state
  const [movies, setMovies] = useState([]); // State for movies for search request
  const [isLoading, setLoading] = useState(true);

  // Function to get User Choice and state update
  const getUserChoice = (data) => {
    setUserChoice(data);
  };
  const handelLoading = () => {
    setLoading('No movies found!');
  };
  // Function set user search to null
  const setSearchFun = () => {
    setSearch(null);
  };

  // This function get Movies and User-Search field
  const onUserSearch = (searchData) => {
    if (searchData) {
      const { movies, query } = searchData;
      setMovies(movies);
      setSearch(query);
      setLoading(false);
    } else {
      setSearch(null);
      setUserChoice('now_playing');
    }
  };

  return (
    <div className={classes.body}>
      <div className={classes.bodySub}>
        <SearchBar onSearch={onUserSearch} />
        <UserChoice onUserChoice={getUserChoice} onSetDisplay={setSearchFun} />
      </div>
      {!search ? (
        <DisplayMovies heading={userChoice} />
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : !movies.length ? (
        <h1>No movies Found!</h1>
      ) : (
        <DisplayMoviesHelper movies={movies} heading={search} />
      )}
    </div>
  );
}

export default App;
