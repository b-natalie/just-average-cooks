import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login";
import Signup from "./Signup";

function UnauthenticatedApp( { setCurrentUser }) {

    return (
        <>
            <h1>Not signed in</h1>
            <Switch>
                <Route exact path="/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
                <Route path="/signup">
                    <Signup setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </>
    )
}

export default UnauthenticatedApp;