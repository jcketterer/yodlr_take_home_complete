import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="Nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/register">
        Register
      </NavLink>
      <NavLink exact to="/admin">
        Users
      </NavLink>
    </nav>
  );
};

export default Nav;
