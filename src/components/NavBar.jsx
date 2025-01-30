import React from "react";

const NavBar = () => {

  return (
      <nav className="navbar navbar-expand-lg fixed-top bg-dark text-white w-100 d-flex flex-fill justify-content-between px-5">
        <strong className="navbar-brand text-white text-uppercase" >Stefan's Lupo Service History</strong>
        <div className="d-flex">
          <input className="mx-2 form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
      </nav>
  )
}

export default NavBar;