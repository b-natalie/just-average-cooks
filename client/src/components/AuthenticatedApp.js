import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import MyProfileSettings from "./MyProfileSettings";
import MyRecipesContainer from "./MyRecipesContainer";
import NavBar from "./NavBar";
import OtherUserPage from "./OtherUserPage";
import PeopleIFollowRecipesContainer from "./PeopleIFollowRecipesContainer";
import RecipeContainer from "./RecipeContainer";
import RecipeDetailsPage from "./RecipeDetailsPage";
import RecipeEditForm from "./RecipeEditForm";

function AuthenticatedApp({ currentUser, updateCurrentUser, savedRecipes, saveRecipe, unsaveRecipe, updateProfileInfo, RecIFollowArr }) {

    const [ allRecipes, setAllRecipes ] = useState([])

    let history = useHistory();

    useEffect(() => {
        fetch("/api/v1/recipes")
        .then(resp => resp.json())
        .then(recipeData => {
            setAllRecipes(recipeData)
        })
    }, [])

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok) {
                updateCurrentUser(null)
                history.push("/")
            }
        })
    }

    return (
        <>
            <NavBar handleLogout={handleLogout} />
            <Switch>
                <Route path="/myrecipes">
                    <MyRecipesContainer savedRecipes={savedRecipes} />
                </Route>
                <Route path="/addrecipe">
                    <AddRecipeForm />
                </Route>
                <Route path="/recipes/:id/edit">
                    <RecipeEditForm currentUser={currentUser}/>
                </Route>
                <Route path="/recipes/:id">
                    <RecipeDetailsPage currentUser={currentUser} saveRecipe={saveRecipe} unsaveRecipe={unsaveRecipe}/>
                </Route>
                <Route path="/users/:id">
                    <OtherUserPage currentUser={currentUser} />
                </Route>
                <Route path="/myprofile">
                    <MyProfileSettings currentUser={currentUser} updateProfileInfo={updateProfileInfo}/>
                </Route>
                <Route path="/recipes-people-i-follow" >
                    <PeopleIFollowRecipesContainer RecIFollowArr={RecIFollowArr} />
                </Route>
                <Route path="/recipes">
                    <RecipeContainer allRecipes={allRecipes} />
                </Route>
            </Switch>
        </>
    )
}

export default AuthenticatedApp;