import React from "react";

const NavBar = ({ searchInput, setSearchInput, scrolled }) => {

  const clearSearchHandler = () => {
    setSearchInput("");
  }

  return (
    <React.Fragment>
      <nav className={`navbar navbar-expand-lg fixed-top text-white w-100 d-flex flex-fill justify-content-center transition-quick ${scrolled ? "p-2" : "p-4"}`}>
        <div className={`navbar-background bg-success border-0 border-bottom border-success shadow-lg position-absolute h-100 w-100 transition-quick ${scrolled ? "show" : "hide"}`} />
        <div className="d-flex mx-3 w-100 justify-content-center search-form">
          <input className="form-control rounded-0 rounded-start"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search" />
          <button type="button" className="btn btn-outline-success rounded-0 rounded-end bg-dark clear-search" disabled={searchInput === ""} onClick={clearSearchHandler}><strong>Clear</strong></button>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar;