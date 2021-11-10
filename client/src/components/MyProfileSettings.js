import React, { useState } from "react";
import { Header, Button } from 'semantic-ui-react';
import EditMyProfile from "./EditMyProfile";
import EditPassword from "./EditPassword";

function MyProfileSettings({ currentUser, updateProfileInfo }) {

    const [isEditMode, setIsEditMode] = useState(false);
    const [ isPwEditMode, setIsPwEditMode ] = useState(false);

    function toggleEditMode() {
        setIsEditMode(!isEditMode)
    }

    function togglePwEditMode() {
        setIsPwEditMode(!isPwEditMode)
    }

    function handleShowForm() {
        if (!isEditMode && !isPwEditMode) {
            return (
                <div style={{ textAlign: "center" }}>
                    <Header as='h2' icon textAlign='center'>
                        {/* <Icon name='users' circular /> */}
                        <Header.Content>Profile Settings</Header.Content>
                    </Header>
                    <h4>Name</h4>
                    <p>{currentUser.first_name} {currentUser.last_name}</p>
                    <h4>Email</h4>
                    <p>{currentUser.email}</p>
                    <Button primary size="tiny" onClick={toggleEditMode}>Edit info</Button>
                    <Button secondary size="tiny" onClick={togglePwEditMode}>Edit password</Button>
                </div>
            )
        } else if (isEditMode) {
            return (
                <EditMyProfile currentUser={currentUser} toggleEditMode={toggleEditMode} updateProfileInfo={updateProfileInfo}/>
            )
        } else {
            return (
                <EditPassword togglePwEditMode={togglePwEditMode}/>
            )
        }
    }

    return (
        <div>{handleShowForm()}</div>
    )
}

export default MyProfileSettings;