// client/src/components/App.js
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, []);

  if(!authChecked) { return <div></div> }
  return (
    <Route>
      { currentUser ? (
          <AuthenticatedApp currentUser={currentUser}/>
        ) : (
          <UnauthenticatedApp setCurrentUser={setCurrentUser}/>
        )
      }
    </Route>
  )
}

export default App;
