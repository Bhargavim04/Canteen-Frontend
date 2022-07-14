import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-dark p-2 navbar-dark bg-opacity-75">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Canteen</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/foodItems">Food Items</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/products">Products</NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search Food" aria-label="Search" />
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
          <button type="button" className="btn btn-primary position-relative">
          <NavLink className="nav-link" to="/cart">Food Cart</NavLink>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </ul>
      </div>
    </div>
  </nav>
        );
    }
}
 
export default Nav;