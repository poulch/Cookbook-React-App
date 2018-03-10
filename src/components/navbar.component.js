import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <header className="page-header">
    <nav>
      <Menu pointing secondary>
        <Menu.Item as={NavLink} to="/ingredients" name="Składniki" />
        <Menu.Item as={NavLink} to="/meals" name="Potrawy" />
        <Menu.Item as={NavLink} to="/search" name="Szukaj" />
      </Menu>
    </nav>
  </header>
);

export default Navbar;
