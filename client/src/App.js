// client/src/components/App.js
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Image } from "semantic-ui-react";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import logo from "./JustAverageCooksBanner.png";
import footer from "./Footer.png";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isCurrentUserChanged, setIsCurrentUserChanged] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [savedRecipes, setSavedRecipes] = useState([])
  const [recIFollowArr, setRecIFollowArr] = useState([])
  const [filteredRecIFollow, setFilteredRecIFollow] = useState([])
  const [isSavedOrUnsaved, setIsSavedOrUnsaved] = useState(false)
  const [isProfileUpdated, setIsProfileUpdated] = useState(false)
  const [peopleIFollow, setPeopleIFollow] = useState([])
  const [peopleFollowingMe, setPeopleFollowingMe] = useState([])
  const [isFollowChanged, setIsFollowChanged] = useState(false)
  const [selectedMyRecipes, setSelectedMyRecipes] = useState([...savedRecipes])

  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
            setSavedRecipes(user.reposted_recipes)
            setSelectedMyRecipes(user.reposted_recipes)
            setRecIFollowArr(user.people_i_follow_recipes)
            setFilteredRecIFollow(user.people_i_follow_recipes)
            setPeopleIFollow(user.followed)
            setPeopleFollowingMe(user.fans)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [isCurrentUserChanged, isSavedOrUnsaved, isProfileUpdated, isFollowChanged]);

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

  function deleteRecipe(recipeId) {
    fetch(`/api/v1/recipes/${recipeId}`, {
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

  function changeToRecipe() {
    setIsSavedOrUnsaved(!isSavedOrUnsaved)
  }

  function toggleIsCurrentUserChanged() {
    setIsCurrentUserChanged(!isCurrentUserChanged)
  }

  function addMyRecipeToMyContainer(recipe) {
    setSavedRecipes([...savedRecipes, recipe])
  }

  function toggleIsFollowChanged() {
    setIsFollowChanged(!isFollowChanged)
  }

  function filterMySelectedRecipes(time) {
    if (time === "0") {
      setSelectedMyRecipes(savedRecipes.filter(recipe => recipe.cook_time + recipe.prep_time < 21))
    } else if (time === "21") {
      setSelectedMyRecipes(savedRecipes.filter(recipe => recipe.cook_time + recipe.prep_time > 20 && recipe.cook_time + recipe.prep_time < 41))
    } else if (time === "41") {
      setSelectedMyRecipes(savedRecipes.filter(recipe => recipe.cook_time + recipe.prep_time > 40))
    } else {
      setSelectedMyRecipes([...savedRecipes])
    }
  }

  function filterFollowRec(time) {
    if (time === "0") {
      setFilteredRecIFollow(recIFollowArr.filter(recipe => recipe.cook_time + recipe.prep_time < 21))
    } else if (time === "21") {
      setFilteredRecIFollow(recIFollowArr.filter(recipe => recipe.cook_time + recipe.prep_time > 20 && recipe.cook_time + recipe.prep_time < 41))
    } else if (time === "41") {
      setFilteredRecIFollow(recIFollowArr.filter(recipe => recipe.cook_time + recipe.prep_time > 40))
    } else {
      setFilteredRecIFollow([...recIFollowArr])
    }
  }

  if (!authChecked) { return <div></div> }
  return (
    <div style={{position: "relative"}}>
      <Image src={logo} />
      <Route>
        {currentUser ? (
          <AuthenticatedApp
            currentUser={currentUser}
            updateCurrentUser={updateCurrentUser}
            selectedMyRecipes={selectedMyRecipes}
            saveRecipe={saveRecipe}
            unsaveRecipe={unsaveRecipe}
            updateProfileInfo={updateProfileInfo}
            filteredRecIFollow={filteredRecIFollow}
            filterFollowRec={filterFollowRec}
            peopleIFollow={peopleIFollow}
            peopleFollowingMe={peopleFollowingMe}
            addMyRecipeToMyContainer={addMyRecipeToMyContainer}
            toggleIsFollowChanged={toggleIsFollowChanged}
            filterMySelectedRecipes={filterMySelectedRecipes}
            deleteRecipe={deleteRecipe}
            changeToRecipe={changeToRecipe}
          />
        ) : (
          <UnauthenticatedApp updateCurrentUser={updateCurrentUser} toggleIsCurrentUserChanged={toggleIsCurrentUserChanged} />
        )
        }
      </Route>
      <br />
      <br />
      <br />
      <br />
      {/* <Image src={footer} style={{position: "relative", bottom: 0}}/> */}
      <Image src={footer} style={{position: "fixed", bottom: 0}}/>
    </div>
  )
}

export default App;
