import React from "react";
import { Header, Image } from 'semantic-ui-react';

function MyProfileSettings({ currentUser }) {
    return (
        <div style={{textAlign: "center"}}>
            <div>
                <Header as='h2' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content>Profile Settings</Header.Content>
                </Header>
            </div>
                <h4>Name</h4>
                <p>{currentUser.first_name} {currentUser.last_name}</p>
                <h4>Email</h4>
                <p>{currentUser.email}</p>
                <h4>Password</h4>
                <p>{currentUser.password}</p>
        </div>
    )
}

export default MyProfileSettings;