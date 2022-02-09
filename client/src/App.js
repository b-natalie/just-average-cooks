// client/src/components/App.js
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Image } from "semantic-ui-react";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import logo from "./JustAverageCooksBanner.png";
// import footer from "./Footer.png";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isCurrentUserChanged, setIsCurrentUserChanged] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [savedRecipes, setSavedRecipes] = useState([])
  const [selectedMyRecipes, setSelectedMyRecipes] = useState([...savedRecipes])
  const [recIFollowArr, setRecIFollowArr] = useState([])
  const [peopleIFollow, setPeopleIFollow] = useState([])
  const [peopleFollowingMe, setPeopleFollowingMe] = useState([])
  const [isChangeMade, setIsChangeMade] = useState(false)

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
            setPeopleIFollow(user.followed)
            setPeopleFollowingMe(user.fans)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [isCurrentUserChanged, isChangeMade]);

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
      .then(userData => setIsChangeMade(!isChangeMade))
  }

  function updateCurrentUser(newUser) {
    setCurrentUser(newUser);
  }

  function toggleIsCurrentUserChanged() {
    setIsCurrentUserChanged(!isCurrentUserChanged)
  }

  function toggleIsChangeMade() {
    setIsChangeMade(!isChangeMade)
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
            updateProfileInfo={updateProfileInfo}
            recIFollowArr={recIFollowArr}
            toggleIsChangeMade={toggleIsChangeMade}
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
      {/* <Image src={footer} style={{position: "fixed", bottom: 0}}/> */}
    </div>
  )
}

export default App;
