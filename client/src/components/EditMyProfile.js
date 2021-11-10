import React, { useState } from "react";
import { Form } from 'semantic-ui-react';

function EditMyProfile({ currentUser, toggleEditMode, updateProfileInfo }) {

    const [updatedUserInfo, setUpdatedUserInfo] = useState({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        email: currentUser.email
    })

    function handleChange(e) {
        setUpdatedUserInfo({
            ...updatedUserInfo,
            [e.target.name]: e.target.value
        })
    }

    function handleSave(e) {
        e.preventDefault();
        updateProfileInfo(updatedUserInfo)
        toggleEditMode();
    }

    return (
        <Form style={{ textAlign: "center" }} onSubmit={handleSave}>
            <Form.Group widths='equal'>
                <Form.Input fluid label='First Name' name="first_name" value={updatedUserInfo.first_name} onChange={handleChange} />
                <Form.Input fluid label='Last name' name="last_name" value={updatedUserInfo.last_name} onChange={handleChange} />
            </Form.Group>
            <Form.Input fluid label='Email' name="email" value={updatedUserInfo.email} onChange={handleChange} />
            <Form.Button>Save</Form.Button>
        </Form>
    )
}

export default EditMyProfile;