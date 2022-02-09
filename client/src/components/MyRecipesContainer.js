import React, { useState } from "react";
import { Grid, Container } from 'semantic-ui-react';
import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function MyRecipesContainer({ myRecipes }) {

    const [ filteredMyRec, setFilteredMyRec ] = useState([...myRecipes])

    function filterRecipes(time, searchTerm) {
        if (time === "0") {
            setFilteredMyRec(myRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) && recipe.cook_time + recipe.prep_time < 21))
        } else if (time === "21") {
            setFilteredMyRec(myRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) && recipe.cook_time + recipe.prep_time > 20))
        } else if (time === "41") {
            setFilteredMyRec(myRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) && recipe.cook_time + recipe.prep_time > 41))
        } else {
            setFilteredMyRec([...myRecipes].filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase())))
        }
    }

    return (
        <div style={{textAlign: "center"}}>
            <Container>
            <h2>My Saved Recipes</h2>
            <p>How much time do you have? <br /> (in minutes)</p>
            <TimeSelector filterRecipes={filterRecipes} />
            <Grid columns={5} centered>
                <Grid.Row>
                    <AddRecipeCard />
                    {filteredMyRec.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </Grid.Row>
            </Grid>
            </Container>
        </div>
    )
}

export default MyRecipesContainer;