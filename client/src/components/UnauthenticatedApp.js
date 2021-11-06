import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login";
import Signup from "./Signup";

function UnauthenticatedApp( { setCurrentUser }) {

    return (
        <Switch>
            <Route path="/app">
                <Login setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="/signup">
                <Signup setCurrentUser={setCurrentUser} />
            </Route>
        </Switch>
    )
}

export default UnauthenticatedApp;