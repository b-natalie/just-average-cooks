import React from "react";
import { Grid } from 'semantic-ui-react';
import RecipeCard from "./RecipeCard";

function RecipeContainer({ allRecipes }) {

    return (
        <Grid verticalAlign='middle' columns={5} centered >
            <Grid.Row>
                {allRecipes.map(recipe => <RecipeCard key ={recipe.id} recipe={recipe}/>)}
            </Grid.Row>
        </Grid>
    )
}

export default RecipeContainer;