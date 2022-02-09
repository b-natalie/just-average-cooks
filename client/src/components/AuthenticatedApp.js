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

// function AuthenticatedApp({ currentUser, updateCurrentUser, saveRecipe, unsaveRecipe, updateProfileInfo, filteredRecIFollow, filterFollowRec, peopleIFollow, peopleFollowingMe, addMyRecipeToMyContainer, toggleIsFollowChanged, deleteRecipe, changeToRecipe }) {
function AuthenticatedApp({ currentUser, updateCurrentUser, selectedMyRecipes, updateProfileInfo, filteredRecIFollow, recIFollowArr, peopleIFollow, peopleFollowingMe, toggleIsChangeMade }) {

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

    // return (
    //     <>
    //         <NavBar profilePic={currentUser.image} handleLogout={handleLogout} />
    //         <Switch>
    //             <Route path="/my-recipes">
    //                 {/* <MyRecipesContainer selectedMyRecipes={selectedMyRecipes} filterMySelectedRecipes={filterMySelectedRecipes} /> */}
    //                 <MyRecipesContainer currentUser={currentUser} />
    //             </Route>
    //             <Route path="/add-recipe">
    //                 <AddRecipeForm addMyRecipeToMyContainer={addMyRecipeToMyContainer} changeToRecipe={changeToRecipe} toggleUpdated={toggleUpdated} />
    //             </Route>
    //             <Route path="/recipes/:id/edit">
    //                 <RecipeEditForm currentUser={currentUser} deleteRecipe={deleteRecipe} changeToRecipe={changeToRecipe} toggleUpdated={toggleUpdated} />
    //             </Route>
    //             <Route path="/recipes/:id">
    //                 <RecipeDetailsPage currentUser={currentUser} saveRecipe={saveRecipe} unsaveRecipe={unsaveRecipe} />
    //             </Route>
    //             <Route path="/users/:id">
    //                 <OtherUserPage currentUser={currentUser} toggleIsFollowChanged={toggleIsFollowChanged} />
    //             </Route>
    //             <Route path="/my-profile">
    //                 <MyProfileSettings currentUser={currentUser} updateProfileInfo={updateProfileInfo} peopleIFollow={peopleIFollow} peopleFollowingMe={peopleFollowingMe} />
    //             </Route>
    //             <Route path="/recipes-people-i-follow" >
    //                 <PeopleIFollowRecipesContainer filteredRecIFollow={filteredRecIFollow} filterFollowRec={filterFollowRec} />
    //             </Route>
    //             <Route path="/recipes">
    //                 <RecipeContainer allRecipes={allRecipes} selectedRecipes={selectedRecipes} filterForTime={filterForTime} />
    //             </Route>
    //         </Switch>
    //     </>
    // )

    return (
        <>
            <NavBar profilePic={currentUser.image} handleLogout={handleLogout} />
            <Switch>
                <Route path="/my-recipes">
                    {/* <MyRecipesContainer selectedMyRecipes={selectedMyRecipes} filterMySelectedRecipes={filterMySelectedRecipes} /> */}
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
                    <MyProfileSettings currentUser={currentUser} />
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