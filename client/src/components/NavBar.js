import React from "react";
import { Link } from "react-router-dom";
import { Input, Menu } from 'semantic-ui-react';

function NavBar({ handleLogout }) {

    return (
      <Menu secondary>
        <Link to= "/recipes">
            <Menu.Item
            name='all recipes'
            //   active={activeItem === 'home'}
            //   onClick={this.handleItemClick}
            />
        </Link>
        <Link to= "/myrecipes">
            <Menu.Item
            name='my recipes'
            //   active={activeItem === 'messages'}
            //   onClick={this.handleItemClick}
            />
        </Link>
        <Link to={"/me"}>
          <Menu.Item
            name='my profile'
          //   active={activeItem === 'friends'}
          //   onClick={this.handleItemClick}
          />
        </Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
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