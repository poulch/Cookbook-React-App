import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/ingredients">Ingreditnets</NavLink>
        </li>
        <li>
          <NavLink to="/meals">Meals</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
