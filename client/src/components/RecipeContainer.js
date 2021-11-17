import React, { useState } from "react";
import { Grid } from 'semantic-ui-react';
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function RecipeContainer({ allRecipes }) {

    const [selectedRecipes, setSelectedRecipes] = useState([...allRecipes])

    function filterForTime(time) {
        if (time === "0") {
            setSelectedRecipes(allRecipes.filter(recipe => recipe.total_time < 21))
        } else if (time === "21") {
            setSelectedRecipes(allRecipes.filter(recipe => recipe.total_time > 20 && recipe.total_time < 41))
        } else if (time === "41") {
            setSelectedRecipes(allRecipes.filter(recipe => recipe.total_time > 40))
        } else {
            setSelectedRecipes([...allRecipes])
        }
    }

    return (
        <div>
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