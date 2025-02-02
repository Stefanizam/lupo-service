import React from "react";

const NavBar = ({ clickSearch, searchInput, setSearchInput, setLoadingStatus }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    setLoadingStatus(true)
    clickSearch(searchInput);
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top text-white w-100 d-flex flex-fill justify-content-center px-5">
      <form className="d-flex w-50" onSubmit={(e) => submitHandler(e)}>
        <input className="mx-2 form-control" value={searchInput} onChange={e => setSearchInput(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success bg-dark" type="submit">Search</button>
      </form>
    </nav>
  )
}

export default NavBar;