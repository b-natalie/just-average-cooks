import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';

function Signup({ updateCurrentUser, toggleIsCurrentUserChanged }) {

    const [ userInfo, setUserInfo ] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    let history = useHistory();

    function handleUserInput(event) {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
        console.log(userInfo)
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(user => {
                    updateCurrentUser(user);
                    toggleIsCurrentUserChanged();
                    history.push("/recipes");
                })
            } else {
                resp.json().then(errors => {
                    console.error(errors);
                })
            }
        })
    }

    return (
        <Form style={{
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            }} 
            onSubmit={handleSubmit}
        >
            <Form.Field >
                <label>First Name</label>
                <input name="first_name" placeholder='example@gmail.com' onChange={handleUserInput} />
            </Form.Field>
            <Form.Field >
                <label>Last Name</label>
                <input name="last_name" placeholder='example@gmail.com' onChange={handleUserInput} />
            </Form.Field>
            <Form.Field >
                <label>Email</label>
                <input name="email" placeholder='example@gmail.com' onChange={handleUserInput} />
            </Form.Field>
            <Form.Field >
                <label>Password</label>
                <input name="password" type="password" placeholder='*******' onChange={handleUserInput}  />
            </Form.Field>
            <Form.Field >
                <label>Password Confirmation</label>
                <input name="password_confirmation" type="password" placeholder='*******' onChange={handleUserInput} />
            </Form.Field>
            <Button type='submit' onClick={handleSubmit} >Submit</Button>
        </Form>
    )
}

export default Signup;