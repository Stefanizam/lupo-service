import React from "react";

const NavBar = () => {

  return (
      <nav class="navbar navbar-expand-lg fixed-top bg-dark text-white w-100 d-flex flex-fill justify-content-between px-5">
        <strong class="navbar-brand text-white text-uppercase" >Stefan's Lupo Service History</strong>
        <div class="d-flex">
          <input class="mx-2 form-control" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </nav>
  )
}

export default NavBar;