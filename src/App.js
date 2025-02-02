import './styles/Main.css';
import { useState } from 'react';

import NavBar from './components/nav-bar';
import ServiceHistory from './components/service-history';
import { useDebounce } from './components/custom-hooks/useDebounce';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const handleSearch = useDebounce(() => {
    setDebouncedSearch(searchInput);
  }, 1500)

  return (
    <div className="App py-5 px-0 m-0">
      <NavBar
        clickSearch={handleSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput} />
      <ServiceHistory debouncedSearch={debouncedSearch} />
    </div>
  );
}

export default App;
