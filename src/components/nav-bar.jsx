import React from "react";

const NavBar = ({ clickSearch, searchInput, setSearchInput }) => {

  return (
    <nav className="navbar navbar-expand-lg fixed-top text-white w-100 d-flex flex-fill justify-content-center px-5">
      <div className="d-flex w-50">
        <input className="mx-2 form-control" value={searchInput} onChange={e => setSearchInput(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success bg-dark" onClick={() => clickSearch(searchInput)}>Search</button>
      </div>
    </nav>
  )
}

export default NavBar;