import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Header, Image, Button } from 'semantic-ui-react';
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import RecipeTimesBar from "./RecipeTimesBar";
import RecipeRatings from "./RecipeRatings";
import RecipeCreatorComments from "./RecipeCreatorComments";


function RecipeDetailsPage({ currentUser }) {

    const recipeId = useParams().id;
    const history = useHistory()

    const [ recipeObj, setRecipeObj ] = useState({
        rec_ings: [],
        instructions: "",
        creator: {},
        comments: []
    })

    useEffect(() => {
        fetch(`/api/v1/recipes/${recipeId}`)
        .then(resp => resp.json())
        .then(recipe => setRecipeObj(recipe))
    }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{textAlign: "center"}}>
                <Header as='h2' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content>{recipeObj.name}</Header.Content>
                </Header>
                <RecipeRatings recipeObj={recipeObj} />
                <br />
                <Image
                    centered
                    href={recipeObj.link}
                    size='medium'
                    src={recipeObj.image}
                />
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
        </div>
    )
}

export default RecipeDetailsPage;