import React from "react";
import { Link } from "react-router-dom";
import { Image, Menu } from 'semantic-ui-react';

function NavBar({ handleLogout, profilePic }) {

  return (
    <Menu secondary>
      <Link to="/recipes">
        <Menu.Item
          name='discover all'
        />
      </Link>
      <Link to="/my-recipes">
        <Menu.Item
          name='my recipes'
        />
      </Link>
      <Link to="/recipes-people-i-follow">
        <Menu.Item
          name='recipes i follow'
        />
      </Link>

      <Menu.Menu position='right' verticalAlign="center">
        <Link to="/my-profile">
          <Menu.Item>
            <Image src={profilePic} avatar/>
          </Menu.Item>
        </Link>
        <Menu.Item
          name='logout'
          onClick={handleLogout}
        />
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar;