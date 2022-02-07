import React from "react";
import { Link } from "react-router-dom";
import { Image, Input, Icon, Menu } from 'semantic-ui-react';

function NavBar({ handleLogout, profilePic }) {

  // function submitSearch(e) {
  //   filterSearch(e.target.value)
  // }

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
        {/* <Link to="/my-profile">
          <Menu.Item>
            <Icon size="large" name="envelope outline"/>
          </Menu.Item>
        </Link> */}
        {/* <Menu.Item>
          <Input icon='search' placeholder='Search...' onChange={submitSearch} />
        </Menu.Item> */}
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