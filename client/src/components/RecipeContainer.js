import React, { useState } from "react";
import { Grid } from 'semantic-ui-react';
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function RecipeContainer({ allRecipes, selectedRecipes, filterForTime }) {

    return (
        <div style={{textAlign: "center"}}>
            <h2>Discover Recipes</h2>
            <h4>How many free minutes do you have?</h4>
            <TimeSelector filterForTime={filterForTime} />
            <Grid verticalAlign='middle' columns={5} centered >
                <Grid.Row>
                    {selectedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default RecipeContainer;