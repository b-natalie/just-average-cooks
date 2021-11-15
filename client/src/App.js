// client/src/components/App.js
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const [ currentUser, setCurrentUser ] = useState(null)
  const [ authChecked, setAuthChecked ] = useState(false)
  const [ savedRecipes, setSavedRecipes ] = useState([])
  const [ RecIFollowArr, setRecIFollowArr ] = useState([])
  const [ isSavedOrUnsaved, setIsSavedOrUnsaved ] = useState(false)
  const [ isProfileUpdated, setIsProfileUpdated ] = useState(false)

  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
            setSavedRecipes(user.reposted_recipes)
            setRecIFollowArr(user.people_i_follow_recipes)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [currentUser, isSavedOrUnsaved, isProfileUpdated]);

  function saveRecipe(recipeId) {
    fetch("/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        recipe_id: recipeId
      })
    })
      .then(resp => resp.json())
      .then(postData => {
        setIsSavedOrUnsaved(!isSavedOrUnsaved)
      })
  }

  function unsaveRecipe(postId) {
    fetch(`/api/v1/posts/${postId}`, {
      method: "DELETE"
    })
      .then(data => {
        setIsSavedOrUnsaved(!isSavedOrUnsaved)
      })
  }

  function updateProfileInfo(updatedUserInfo) {
    fetch(`/api/v1/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedUserInfo)
    })
      .then(resp => resp.json())
      .then(userData => setIsProfileUpdated(!isProfileUpdated))
  }

  function updateCurrentUser(newUser) {
    setCurrentUser(newUser);
  }

  if (!authChecked) { return <div></div> }
  return (
    <Route>
      <h1>Just Average Cooks</h1>
      {currentUser ? (
        <AuthenticatedApp currentUser={currentUser} updateCurrentUser={updateCurrentUser} savedRecipes={savedRecipes} saveRecipe={saveRecipe} unsaveRecipe={unsaveRecipe} updateProfileInfo={updateProfileInfo} RecIFollowArr={RecIFollowArr} />
      ) : (
        <UnauthenticatedApp updateCurrentUser={updateCurrentUser} />
      )
      }
    </Route>
  )
}

export default App;
