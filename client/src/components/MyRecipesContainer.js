import React from "react";
import { Grid, Container } from 'semantic-ui-react';
import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function MyRecipesContainer({ selectedMyRecipes, filterMySelectedRecipes }) {

    return (
        <div style={{textAlign: "center"}}>
            <Container>
            <h2>My Saved Recipes</h2>
            <h4>How many free minutes do you have?</h4>
            <TimeSelector filterForTime={filterMySelectedRecipes} />
            <Grid verticalAlign='middle' columns={5} centered>
                <Grid.Row>
                    <AddRecipeCard />
                    {selectedMyRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </Grid.Row>
            </Grid>
            </Container>
        </div>
    )
}

export default MyRecipesContainer;