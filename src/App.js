import './styles/Main.scss';
import { useEffect, useState } from 'react';

import NavBar from './components/nav-bar';
import ServiceHistory from './components/service-history';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleSearch = (value) => {
    setSearchInput(value);
  }


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
        searchInput={searchInput}
        setSearchInput={handleSearch}
        scrolled={scrolled} />
      <ServiceHistory debouncedSearch={searchInput} />
    </div>
  );
}

export default App;
