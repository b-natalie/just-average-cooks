import React from "react";
import Logout from "./Logout";

function AuthenticatedApp({ currentUser, setCurrentUser }) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok) {
                setCurrentUser(null)
                // history.push("/")
            }
        })
    }

    return (
        <>
            <h1>Logged In!</h1>
            <Logout handleLogout={handleLogout}/>
        </>
    )
}

export default AuthenticatedApp;