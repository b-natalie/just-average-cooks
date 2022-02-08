import React, { useState } from "react";
import { Grid, Container } from 'semantic-ui-react';
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function RecipeContainer({ allRecipes }) {

    const [ filteredRecipes, setFilteredRecipes ] = useState([...allRecipes])

    function filterRecipes(time, searchTerm) {
        if (time === "0") {
            setFilteredRecipes(allRecipes.filter(recipe => recipe.cook_time + recipe.prep_time < 21))
        } else if (time === "21") {
            setFilteredRecipes(allRecipes.filter(recipe => recipe.cook_time + recipe.prep_time > 20 && recipe.cook_time + recipe.prep_time < 41))
        } else if (time === "41") {
            setFilteredRecipes(allRecipes.filter(recipe => recipe.cook_time + recipe.prep_time > 41))
        } else {
            setFilteredRecipes([...allRecipes])
        }
    }

    return (
        <div style={{textAlign: "center"}}>
            <Container>
            <h2>Recipes From Around The World</h2>
            <p>How much time do you have?</p>
            <TimeSelector filterRecipes={filterRecipes} />
            <Grid columns={5} centered >
                <Grid.Row>
                    {filteredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </Grid.Row>
            </Grid>
            </Container>
        </div>
    )
}

export default RecipeContainer;