import './styles/Main.css';
import { useState } from 'react';

import NavBar from './components/nav-bar';
import ServiceHistory from './components/service-history';
import { useDebounce } from './components/custom-hooks/useDebounce';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);

  const handleSearch = useDebounce(() => {
    setDebouncedSearch(searchInput);
    setLoadingStatus(false);
  }, 1000)

  return (
    <div className="App py-5 px-0 m-0">
      <NavBar
        clickSearch={handleSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setLoadingStatus={setLoadingStatus} />
      {loadingStatus &&
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
      <ServiceHistory debouncedSearch={debouncedSearch} />
    </div>
  );
}

export default App;
