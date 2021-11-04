import React from "react";
import Login from "./Login";

function UnauthenticatedApp( { setCurrentUser }) {

    

    return (
        <>
            <h1>Please sign in</h1>
            <Login/>
        </>
    )
}

export default UnauthenticatedApp;