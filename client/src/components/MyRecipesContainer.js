import React, { useState } from "react";
import { Grid, Image } from 'semantic-ui-react';
import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";

function MyRecipesContainer({ savedRecipes }) {

    return (
        <Grid verticalAlign='middle' columns={5} centered>
            <Grid.Row>
                <AddRecipeCard />
                {savedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
            </Grid.Row>
        </Grid>
    )
}

export default MyRecipesContainer;