import React from "react";
import { Grid } from 'semantic-ui-react';
import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function MyRecipesContainer({ selectedMyRecipes, filterMySelectedRecipes }) {

    return (
        <div style={{textAlign: "center"}}>
            <h2>My Saved Recipes</h2>
            <h4>How many free minutes do you have?</h4>
            <TimeSelector filterForTime={filterMySelectedRecipes} />
            <Grid verticalAlign='middle' columns={5} centered>
                <Grid.Row>
                    <AddRecipeCard />
                    {selectedMyRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default MyRecipesContainer;