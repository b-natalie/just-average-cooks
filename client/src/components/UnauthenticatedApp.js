import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login";
import Signup from "./Signup";

function UnauthenticatedApp({ updateCurrentUser, toggleIsCurrentUserChanged }) {

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Login updateCurrentUser={updateCurrentUser} toggleIsCurrentUserChanged={toggleIsCurrentUserChanged} />
                </Route>
                <Route path="/signup">
                    <Signup updateCurrentUser={updateCurrentUser} toggleIsCurrentUserChanged={toggleIsCurrentUserChanged}/>
                </Route>
            </Switch>
        </>
    )
}

export default UnauthenticatedApp;