import React from 'react'
import logo from '../logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className='img-fluid logo-navbar' src={logo} alt='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Portfolio</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
};

export default Navbar
