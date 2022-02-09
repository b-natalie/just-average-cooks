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

function AuthenticatedApp({ currentUser, updateCurrentUser, updateProfileInfo, recIFollowArr, toggleIsChangeMade }) {

    const [myRecipes, setMyRecipes] = useState([...currentUser.reposted_recipes])

    let history = useHistory();

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

    function addNewRecipe(recipe) {
        setMyRecipes([...myRecipes, recipe])
    }

    function deleteRecipe(recipeId) {
        setMyRecipes(myRecipes.filter(recipe => recipe.id !== parseInt(recipeId)))
    }

    return (
        <>
            <NavBar profilePic={currentUser.image} handleLogout={handleLogout} />
            <Switch>
                <Route path="/my-recipes">
                    <MyRecipesContainer myRecipes={myRecipes} />
                </Route>
                <Route path="/add-recipe">
                    <AddRecipeForm addNewRecipe={addNewRecipe} toggleIsChangeMade={toggleIsChangeMade} />
                </Route>
                <Route path="/recipes/:id/edit">
                    <RecipeEditForm currentUser={currentUser} deleteRecipe={deleteRecipe} toggleIsChangeMade={toggleIsChangeMade} />
                </Route>
                <Route path="/recipes/:id">
                    <RecipeDetailsPage currentUser={currentUser} addNewRecipe={addNewRecipe} deleteRecipe={deleteRecipe}/>
                </Route>
                <Route path="/users/:id">
                    <OtherUserPage currentUser={currentUser} toggleIsChangeMade={toggleIsChangeMade} />
                </Route>
                <Route path="/my-profile">
                    <MyProfileSettings currentUser={currentUser} updateProfileInfo={updateProfileInfo} />
                </Route>
                <Route path="/recipes-people-i-follow" >
                    <PeopleIFollowRecipesContainer recIFollowArr={recIFollowArr} />
                </Route>
                <Route path="/recipes">
                    <RecipeContainer />
                </Route>
            </Switch>
        </>
    )
}

export default AuthenticatedApp;