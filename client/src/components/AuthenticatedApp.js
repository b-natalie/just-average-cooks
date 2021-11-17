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

function AuthenticatedApp({ currentUser, updateCurrentUser, selectedMyRecipes, saveRecipe, unsaveRecipe, updateProfileInfo, RecIFollowArr, peopleIFollow, peopleFollowingMe, addMyRecipeToMyContainer, toggleIsFollowChanged, filterMySelectedRecipes, deleteRecipe }) {

    const [ allRecipes, setAllRecipes ] = useState([])
    const [ selectedRecipes, setSelectedRecipes ] = useState([])

    let history = useHistory();

    useEffect(() => {
        fetch("/api/v1/recipes")
        .then(resp => resp.json())
        .then(recipeData => {
            setAllRecipes(recipeData)
            setSelectedRecipes(recipeData)
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

    function filterForTime(time) {
        if (time === "0") {
            setSelectedRecipes(allRecipes.filter(recipe => recipe.total_time < 21))
        } else if (time === "21") {
            setSelectedRecipes(allRecipes.filter(recipe => recipe.total_time > 20 && recipe.total_time < 41))
        } else if (time === "41") {
            setSelectedRecipes(allRecipes.filter(recipe => recipe.total_time > 40))
        } else {
            setSelectedRecipes([...allRecipes])
        }
    }

    return (
        <>
            <NavBar profilePic={currentUser.image} handleLogout={handleLogout} />
            <Switch>
                <Route path="/myrecipes">
                    <MyRecipesContainer selectedMyRecipes={selectedMyRecipes} filterMySelectedRecipes={filterMySelectedRecipes}/>
                </Route>
                <Route path="/addrecipe">
                    <AddRecipeForm addMyRecipeToMyContainer={addMyRecipeToMyContainer}/>
                </Route>
                <Route path="/recipes/:id/edit">
                    <RecipeEditForm currentUser={currentUser} deleteRecipe={deleteRecipe}/>
                </Route>
                <Route path="/recipes/:id">
                    <RecipeDetailsPage currentUser={currentUser} saveRecipe={saveRecipe} unsaveRecipe={unsaveRecipe}/>
                </Route>
                <Route path="/users/:id">
                    <OtherUserPage currentUser={currentUser} toggleIsFollowChanged={toggleIsFollowChanged}/>
                </Route>
                <Route path="/myprofile">
                    <MyProfileSettings currentUser={currentUser} updateProfileInfo={updateProfileInfo} peopleIFollow={peopleIFollow} peopleFollowingMe={peopleFollowingMe}/>
                </Route>
                <Route path="/recipes-people-i-follow" >
                    <PeopleIFollowRecipesContainer RecIFollowArr={RecIFollowArr} />
                </Route>
                <Route path="/recipes">
                    <RecipeContainer allRecipes={allRecipes} selectedRecipes={selectedRecipes} filterForTime={filterForTime}/>
                </Route>
            </Switch>
        </>
    )
}

export default AuthenticatedApp;