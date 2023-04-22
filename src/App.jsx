import SearchBar from './componants/SearchBar';
import { useState } from 'react';
import classes from './App.module.css';
import DisplayAllMovies from './componants/DisplayAllMovies';
import UserChoice from './componants/UserChoice';
import DisplayMoviesHelper from './componants/DisplayMoviesHelper';

function App() {
  const [search, setSearch] = useState(null); // Search text state
  const [userChoice, setUserChoice] = useState('now_playing'); // User choice state
  const [movies, setMovies] = useState([]); // State for movies for search request

  // Function to get User Choice and state update
  const getUserChoice = (data) => {
    setUserChoice(data);
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
        <DisplayAllMovies choice={userChoice} />
      ) : (
        <DisplayMoviesHelper movies={movies} heading={search} />
      )}
    </div>
  );
}

export default App;
