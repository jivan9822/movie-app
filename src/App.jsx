import './App.css';
import SearchBar from './componants/SearchBar';
import { useState } from 'react';
import DisplayAllMovies from './componants/DisplayAllMovies';

function App() {
  const [search, setSearch] = useState(true);

  const displayHandler = (data) => {
    setSearch(data);
  };
  return (
    <div className='App'>
      <SearchBar onSearch={displayHandler} onShow={search} />
      {search && <DisplayAllMovies />}
    </div>
  );
}

export default App;
