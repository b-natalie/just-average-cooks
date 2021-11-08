import React from "react";
import { Grid, Image } from 'semantic-ui-react';
import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";

function MyRecipesContainer({ currentUser }) {
    return (
        <Grid verticalAlign='middle' columns={5} centered>
            <Grid.Row>
                <AddRecipeCard />
                {currentUser.reposted_recipes.map(recipe => <RecipeCard key ={recipe.id} recipe={recipe}/>)}
            </Grid.Row>
        </Grid>
    )
}

export default MyRecipesContainer;