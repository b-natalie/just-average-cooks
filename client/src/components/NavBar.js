import React from "react";
import { Link } from "react-router-dom";
import { Image, Input, Menu } from 'semantic-ui-react';

function NavBar({ handleLogout, profilePic }) {

  return (
    <Menu secondary>
      <Link to="/recipes">
        <Menu.Item
          name='discover all'
        //   active={activeItem === 'home'}
        //   onClick={this.handleItemClick}
        />
      </Link>
      <Link to="/myrecipes">
        <Menu.Item
          name='my recipes'
        //   active={activeItem === 'messages'}
        //   onClick={this.handleItemClick}
        />
      </Link>
      <Link to="/recipes-people-i-follow">
        <Menu.Item
          name='people i follow'
        //   active={activeItem === 'friends'}
        //   onClick={this.handleItemClick}
        />
      </Link>
      {/* <Link to="/myprofile">
        <Menu.Item
          name='my profile'
        //   active={activeItem === 'friends'}
        //   onClick={this.handleItemClick}
        />
      </Link> */}
      <Menu.Menu position='right'>
        {/* <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item> */}
        <Link to="/myprofile">
          <Menu.Item>
            <Image src={profilePic} avatar/>
          </Menu.Item>
        </Link>
        <Menu.Item
          name='logout'
          onClick={handleLogout}
        // active={activeItem === 'logout'}
        // onClick={this.handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar;