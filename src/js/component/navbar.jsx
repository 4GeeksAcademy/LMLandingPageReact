import React from "react";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Start Bootstrap</span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul> 
      </div> 
    </div>
    </nav>
  );
}


export default Navbar;