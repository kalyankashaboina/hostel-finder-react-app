import React, { useState } from 'react'
import { Link } from 'react-router-dom'





function NavBarPage3() {
  
  return (
    <div>
     

<nav className="navbar navbar-expand-lg bg-body-tertiary"  style={{bottom:"80px"}}>
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
        <li>
           
        </li>
      </ul>
     
        
   
    </div>
    <h5  className="btn btn-outline-success">Happy Vist......</h5>
  </div>
</nav>

    </div>
  )
}

export default NavBarPage3