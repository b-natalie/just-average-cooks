import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import AddRecipeForm from "./AddRecipeForm";
import MyRecipesContainer from "./MyRecipesContainer";
import NavBar from "./NavBar";
import RecipeContainer from "./RecipeContainer";
import RecipeDetailsPage from "./RecipeDetailsPage";
import RecipeEditForm from "./RecipeEditForm";

function AuthenticatedApp({ currentUser, setCurrentUser }) {

    const [ allRecipes, setAllRecipes ] = useState([])

    useEffect(() => {
        fetch("/api/v1/recipes")
        .then(resp => resp.json())
        .then(recipeData => setAllRecipes(recipeData))
    }, [])

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
            {/* <Logout handleLogout={handleLogout}/> */}
            <NavBar handleLogout={handleLogout} />
            <Switch>
                <Route path="/myrecipes">
                    <MyRecipesContainer currentUser={currentUser} />
                </Route>
                <Route path="/addrecipe">
                    <AddRecipeForm />
                </Route>
                <Route path="/recipes/:id/edit">
                    <RecipeEditForm currentUser={currentUser}/>
                </Route>
                <Route path="/recipes/:id">
                    <RecipeDetailsPage currentUser={currentUser}/>
                </Route>
                <Route path="/recipes">
                    <RecipeContainer allRecipes={allRecipes} />
                </Route>
            </Switch>
        </>
    )
}

export default AuthenticatedApp;