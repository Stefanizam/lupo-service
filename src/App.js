import './styles/Main.css';
import { useEffect, useState } from 'react';

import NavBar from './components/nav-bar';
import ServiceHistory from './components/service-history';
import { useDebounce } from './components/custom-hooks/useDebounce';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleSearch = useDebounce(() => {
    setDebouncedSearch(searchInput);
    setLoadingStatus(false);
  }, 1000)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="App py-5 px-0 m-0">
      <NavBar
        clickSearch={handleSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        loadingStatus={loadingStatus}
        setLoadingStatus={setLoadingStatus}
        scrolled={scrolled} />
      <ServiceHistory debouncedSearch={debouncedSearch} />
    </div>
  );
}

export default App;
