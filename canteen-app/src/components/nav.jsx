import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const Nav = () => {
  const login = useSelector((state) => state.custstore.login);
        return (
        <div>
        <header>
          <img src="navheader.jpg" alt="image" height="200px" width="100%" />
        </header>
        <nav className="navbar navbar-expand-lg bg-dark p-2 navbar-dark bg-opacity-75">
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1"><em>Canteen</em></span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/home">HOME</NavLink>
          </li> 
          {login.loggedIn && login.role!="admin" && (
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/foodItems">FOOD MENU</NavLink>
          </li>
          )}
          {/* {login.loggedIn && login.role=="admin" && ( 
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/customers/view">CUSTOMERS</NavLink>
          </li>
          )} */}
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {login.loggedIn ? (
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  LOGOUT
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  LOGIN
                </NavLink>
              </li>
            )}
          {!login.loggedIn && (
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">REGISTER</NavLink>
          </li> 
          )}
          {login.loggedIn && (
              <li className="nav-item">
                <NavLink to="/new/profile" className="nav-link">
                  PROFILE
                </NavLink>
              </li>
            )}
          {login.loggedIn && login.role=="customer" && ( 
          <button type="button" className="btn btn-primary btn-sm position-relative">
          <NavLink className="nav-link" to="/cart"><i class="bi bi-cart"></i> FOOD CART</NavLink>
          </button>
          )}
        </ul>
      </div>
    </div>
  </nav>
  </div>
        );
    };
 
export default Nav;