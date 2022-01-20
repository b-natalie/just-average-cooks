import React from "react";
import { Link } from "react-router-dom";
import { Image, Icon, Menu } from 'semantic-ui-react';

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
      <Link to="/my-recipes">
        <Menu.Item
          name='my recipes'
        //   active={activeItem === 'messages'}
        //   onClick={this.handleItemClick}
        />
      </Link>
      <Link to="/recipes-people-i-follow">
        <Menu.Item
          name='recipes i follow'
        //   active={activeItem === 'friends'}
        //   onClick={this.handleItemClick}
        />
      </Link>
      <Menu.Menu position='right' verticalAlign="center">
        <Link to="/my-profile">
          <Menu.Item>
            <Icon size="large" name="envelope outline"/>
          </Menu.Item>
        </Link>
        {/* <Button color="green"><Icon name="envelope outline"/></Button> */}
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