import React, { useState } from "react";
import { Header, Button, Image } from 'semantic-ui-react';
import EditMyProfile from "./EditMyProfile";
import EditPassword from "./EditPassword";
import FollowingFollowerContainer from "./FollowingFollowerContainer";

function MyProfileSettings({ currentUser, updateProfileInfo, peopleIFollow, peopleFollowingMe }) {

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
                <div style={{ textAlign: "center", justifyContent: "center" }}>
                    <Header as='h2' icon textAlign='center'>
                        {/* <Icon name='users' circular /> */}
                        <Header.Content>Profile Settings</Header.Content>
                    </Header>
                    <img src={currentUser.image} style={{ maxHeight: 175, borderRadius: 175 / 2 }} />
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
        <div>
            {handleShowForm()}
            <br />
            <FollowingFollowerContainer peopleIFollow={peopleIFollow} peopleFollowingMe={peopleFollowingMe} />
        </div>
    )
}

export default MyProfileSettings;