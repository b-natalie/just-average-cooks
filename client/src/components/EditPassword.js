import React, { useState } from "react";
import { Form, Container } from 'semantic-ui-react';

function EditPassword({ togglePwEditMode }) {

    const [passwordInfo, setPasswordInfo] = useState({
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
        <Container>
            <Form style={{ textAlign: "center" }} onSubmit={handleSave}>
                    <Form.Input fluid label='Old Password' type="password" name="password" value={passwordInfo.password} onChange={handleChange} />
                    <br/>
                    <Form.Input fluid label='New Password' type="password" name="new_password" value={passwordInfo.new_password} onChange={handleChange} />
                <Form.Button primary>Save</Form.Button>
            </Form>
        </Container>
    )
}

export default EditPassword;