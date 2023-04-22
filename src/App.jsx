import SearchBar from './componants/SearchBar';
import { useState } from 'react';
import classes from './App.module.css';
import DisplayAllMovies from './componants/DisplayAllMovies';
import UserChoice from './componants/UserChoice';
import DisplayMoviesHelper from './componants/DisplayMoviesHelper';
import DisplayMovies from './componants/DisplayMovies';

function App() {
  const [search, setSearch] = useState(null);
  const [userChoice, setUserChoice] = useState('now_playing');
  const [movies, setMovies] = useState([]);
  const getUserChoice = (data) => {
    setUserChoice(data);
  };
  const setSearchFun = () => {
    setSearch(null);
  };
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
