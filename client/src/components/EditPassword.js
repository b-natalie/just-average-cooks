import React, { useState } from "react";
import { Form } from 'semantic-ui-react';

function EditPassword({ togglePwEditMode }) {

    const [ passwordInfo, setPasswordInfo ] = useState({
        password: "",
        new_password: ""
    })

    function handleChange(e) {
        setPasswordInfo({
            ...passwordInfo,
            [e.target.name]: e.target.value
        })
    }

    function handleSave(e) {
        e.preventDefault();
        fetch("/edit_password", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(passwordInfo)
        })
        .then(resp => resp.json())
        .then(data => togglePwEditMode())
    }

    return (
        <Form style={{ textAlign: "center" }} onSubmit={handleSave}>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Old Password' type="password" name="password" value={passwordInfo.password} onChange={handleChange} />
                <Form.Input fluid label='New Password' type="password" name="new_password" value={passwordInfo.new_password} onChange={handleChange} />
            </Form.Group>
            <Form.Button>Save</Form.Button>
        </Form>
    )
}

export default EditPassword;