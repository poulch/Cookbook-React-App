import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <header className="page-header">
    <nav>
      <Menu pointing secondary>
        <Menu.Item as={NavLink} to="/ingredients" name="Ingreditnets" />
        <Menu.Item as={NavLink} to="/meals" name="Meals" />
        <Menu.Item as={NavLink} to="/search" name="Search" />
      </Menu>
    </nav>
  </header>
);

export default Navbar;
