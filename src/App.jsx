import SearchBar from './componants/SearchBar';
import { useState } from 'react';
import classes from './App.module.css';
import DisplayAllMovies from './componants/DisplayAllMovies';
import UserChoice from './componants/UserChoice';
import DisplayMoviesHelper from './componants/DisplayMoviesHelper';
import DisplayMovies from './componants/DisplayMovies';

function App() {
  const [search, setSearch] = useState(true);
  const [userChoice, setUserChoice] = useState('now_playing');
  const getUserChoice = (data) => {
    setUserChoice(data);
  };

  const displayHandler = (data) => {
    setSearch(data);
  };
  return (
    <div className={classes.body}>
      <SearchBar onSearch={displayHandler} onShow={search} />
      <UserChoice onUserChoice={getUserChoice} />
      {search ? (
        <DisplayAllMovies choice={userChoice} />
      ) : (
        <DisplayMovies heading={userChoice} />
      )}
    </div>
  );
}

export default App;
