import React from "react";

const NavBar = ({ clickSearch, searchInput, setSearchInput, loadingStatus, setLoadingStatus, scrolled }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    setLoadingStatus(true)
    clickSearch(searchInput);
  }

  const clearSearchHandler = (event) => {
    setSearchInput("");
    submitHandler(event)
  }

  return (
    <React.Fragment>
      <nav className={`navbar navbar-expand-lg fixed-top text-white w-100 d-flex flex-fill justify-content-center transition-quick ${scrolled ? "p-2" : "p-4"}`}>
        <div className={`navbar-background bg-success border-0 border-bottom border-success shadow-lg position-absolute h-100 w-100 transition-quick ${scrolled ? "show" : "hide"}`} />
        <form className="d-flex search-form" onSubmit={(e) => submitHandler(e)}>
          <div className="w-100 position-relative">
            <input className="form-control rounded-0 rounded-start" disabled={loadingStatus} value={searchInput} onChange={e => setSearchInput(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            {loadingStatus &&
              <div className="search-spinner">
                <div className="spinner-border spinner-border-sm text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>}
          </div>
          <button type="button" className="btn btn-outline-success bg-dark rounded-0 clear-search" disabled={searchInput === "" || loadingStatus} onClick={clearSearchHandler}><strong>X</strong></button>
          <button className="btn btn-outline-success bg-dark rounded-0 rounded-end search-btn-text" disabled={loadingStatus} type="submit">Search</button>
          <button className="btn btn-outline-success bg-dark rounded-0 rounded-end search-btn-icon" disabled={loadingStatus} type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </form>
      </nav>
    </React.Fragment>
  )
}

export default NavBar;