import React, { useState } from 'react'
import { Link } from 'react-router-dom'




function NavBarPage({ handleSearch, handleClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };
  return (
    <div>
     
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop:"10px"}} >
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" href="#">
        Hostel App
      </Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-disabled="true">
            Signout
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search hostel or price"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
        <button className="btn btn-outline-success" type="submit" >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBarPage