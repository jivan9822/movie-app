import './App.css';
import SearchBar from './componants/SearchBar';
import PopularMovies from './componants/PopularMovies';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState(true);
  const displayHandler = (data) => {
    setSearch(data);
  };
  return (
    <div className='App'>
      <SearchBar onSearch={displayHandler} onShow={search} />
      {search && <PopularMovies />}
    </div>
  );
}

export default App;
