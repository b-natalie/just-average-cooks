import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Header, Image, Button } from 'semantic-ui-react';
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import RecipeTimesBar from "./RecipeTimesBar";
import RecipeRatings from "./RecipeRatings";
import RecipeCreatorComments from "./RecipeCreatorComments";
import MyRecipePost from "./MyRecipePost";
import EditMyRecipePost from "./EditMyRecipePost";


function RecipeDetailsPage({ currentUser, saveRecipe, unsaveRecipe }) {

    const recipeId = useParams().id;
    const history = useHistory()

    const [ recipeObj, setRecipeObj ] = useState({
        rec_ings: [],
        instructions: "",
        creator: {},
        comments: []
    })
    const [ isSaved, setIsSaved ] = useState(false)
    const [ postId, setPostId ] = useState(0)
    const [ isEditMode, setIsEditMode ] = useState(false)
    const [ isUpdated, setIsUpdated ] = useState(false)

    useEffect(() => {
        fetch(`/api/v1/recipes/${recipeId}`)
        .then(resp => resp.json())
        .then(recipe => {
            setRecipeObj(recipe)
            if (recipe.my_post_info) {
                setIsSaved(true)
                setPostId(recipe.my_post_info.id)
            }
        })
    }, [])

    function handleSave() {
        saveRecipe(recipeId)
        setIsSaved(!isSaved)
    }

    function handleUnsave() {
        unsaveRecipe(postId)
        setIsSaved(!isSaved)
    }

    function toggleEditMode() {
        setIsEditMode(!isEditMode)
    }

    function updatePost(updatedPost) {
        fetch(`/api/v1/posts/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedPost)
        })
        .then(resp => resp.json())
        .then(data => {
            toggleEditMode();
        })
    }

    function showMyPost() {
        if (isSaved && !isEditMode) {
            return (
                <MyRecipePost myPost={recipeObj.my_post_info} toggleEditMode={toggleEditMode}/>
            )
        } else if (isSaved) {
            return (
                <EditMyRecipePost myPost={recipeObj.my_post_info} updatePost={updatePost}/>
            )
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            {/* {console.log(recipeObj.my_post_info)} */}
            <div style={{textAlign: "center"}}>
                <Header as='h2' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content>{recipeObj.name}</Header.Content>
                    {isSaved ? <Button size='mini' onClick={handleUnsave}>Saved</Button> : <Button primary size='mini' onClick={handleSave}>Save</Button>}
                </Header>
                <RecipeRatings recipeObj={recipeObj} />
                <br />
                <Image
                    centered
                    href={recipeObj.link}
                    size='medium'
                    src={recipeObj.image}
                />
                <br />
            </div>
            <br />
            <RecipeTimesBar recipeObj={recipeObj} />
            <br />
            <br />
            <RecipeIngredients recipeObj={recipeObj} />
            <br />
            <RecipeInstructions recipeObj={recipeObj} />
            <br />
            <RecipeCreatorComments recipeObj={recipeObj} />
            <br />
            {recipeObj.creator.id === currentUser.id ? <Button primary onClick={e => history.push(`/recipes/${recipeId}/edit`)}>Edit recipe</Button> : null}
            <br />
            {showMyPost()}
        </div>
    )
}

export default RecipeDetailsPage;