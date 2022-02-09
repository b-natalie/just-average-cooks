import React, { useState } from "react";
import { Header, Button, Image } from 'semantic-ui-react';
import EditMyProfile from "./EditMyProfile";
import EditPassword from "./EditPassword";
import FollowingFollowerContainer from "./FollowingFollowerContainer";

function MyProfileSettings({ currentUser, updateProfileInfo }) {

    const [isEditMode, setIsEditMode] = useState(false);
    const [isPwEditMode, setIsPwEditMode] = useState(false);

    function toggleEditMode() {
        setIsEditMode(!isEditMode)
    }

    function togglePwEditMode() {
        setIsPwEditMode(!isPwEditMode)
    }

    function handleShowForm() {
        if (!isEditMode && !isPwEditMode) {
            return (
                <div>
                    <div style={{ textAlign: "center", justifyContent: "center" }}>
                        <Header as='h2' icon textAlign='center'>
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
                    <br />
                    <FollowingFollowerContainer peopleIFollow={currentUser.followed} peopleFollowingMe={currentUser.fans} />
                </div>
            )
        } else if (isEditMode) {
            return (
                <EditMyProfile currentUser={currentUser} toggleEditMode={toggleEditMode} updateProfileInfo={updateProfileInfo} />
            )
        } else {
            return (
                <EditPassword togglePwEditMode={togglePwEditMode} />
            )
        }
    }

    return (
        <div>
            {handleShowForm()}
            <br/>
        </div>
    )
}

export default MyProfileSettings;