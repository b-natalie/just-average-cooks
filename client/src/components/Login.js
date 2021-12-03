import React, { useState } from "react";
import { Button, Container, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

function Login({ updateCurrentUser, toggleIsCurrentUserChanged }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null)
    let history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json().then(user => {
                        updateCurrentUser(user);
                        toggleIsCurrentUserChanged();
                        setErrorMessage(null);
                        history.push("/recipes");
                    })
                } else {
                    resp.json().then(errors => {
                        console.log(errors);
                        setErrorMessage(errors.error);
                    })
                }
            })
    }

    function handleSignUpClick() {
        history.push("/signup");
    }

    return (
        // <Form style={{
        //     height: '70vh',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     }} 
        //     onSubmit={handleSubmit}
        // >
        //     <Form.Field onChange={(e) => setEmail(e.target.value)}>
        //         <label>Email</label>
        //         <input placeholder='example@gmail.com' />
        //     </Form.Field>
        //     <Form.Field onChange={(e) => setPassword(e.target.value)}>
        //         <label>Password</label>
        //         <input type="password" placeholder='*******' />
        //     </Form.Field>
        //     <Button type='submit'>Submit</Button>
        // </Form>
        // <Container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Container>
            <br/>
            <div style={{textAlign: "center", justifyContent: "center", alignItems: "center"}} >
                <img src="https://i.imgur.com/PIB3MGx.png" style={{ maxHeight: 250}} />
            </div>
            <br/>
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable >
                    <Grid.Column>
                        <Form onSubmit={handleSubmit}>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                label='Email'
                                placeholder='example@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                placeholder='********'
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button content='Login' primary />
                            {errorMessage ? <p style={{ backgroundColor: "#FFCCCC" }}>{errorMessage}</p> : null}
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Button content='Sign up' icon='signup' size='big' onClick={handleSignUpClick} />
                    </Grid.Column>
                </Grid>
                <Divider vertical>Or</Divider>
            </Segment>
            <br/>
            <div style={{textAlign: "center", justifyContent: "center", alignItems: "center"}} >
                <img src="https://i.imgur.com/KbJcrCL.png" style={{ maxHeight: 250, borderRadius: 250 / 2}} />
            </div>
            <br/>
        </Container>
    )
}

export default Login;