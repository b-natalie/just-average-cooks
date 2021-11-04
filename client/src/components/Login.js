import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

function Login({ setCurrentUser }) {
    return (
        <Form style={{maxWidth: 500}}>
            <Form.Field>
                <label>Email</label>
                <input placeholder='example@gmail.com' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='*******' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default Login;