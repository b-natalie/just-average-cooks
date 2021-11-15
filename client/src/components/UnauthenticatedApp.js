import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login";
import Signup from "./Signup";

function UnauthenticatedApp({ updateCurrentUser }) {

    return (
        <>
            <h1>Not signed in</h1>
            <Switch>
                <Route exact path="/">
                    <Login updateCurrentUser={updateCurrentUser} />
                </Route>
                <Route path="/signup">
                    <Signup updateCurrentUser={updateCurrentUser} />
                </Route>
            </Switch>
        </>
    )
}

export default UnauthenticatedApp;