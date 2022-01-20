import React from "react";
import { Grid, Container } from 'semantic-ui-react';
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function RecipeContainer({ allRecipes, selectedRecipes, filterForTime }) {

    return (
        <div style={{textAlign: "center"}}>
            <Container>
            <h2>Recipes From Around The World</h2>
            <h4>How many free minutes do you have?</h4>
            <TimeSelector filterForTime={filterForTime} />
            {/* <Grid verticalAlign='middle' columns={5} centered > */}
            <Grid columns={5} centered >
                <Grid.Row>
                    {selectedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </Grid.Row>
            </Grid>
            </Container>
        </div>
    )
}

export default RecipeContainer;