import React, { useState } from "react";
import { Grid, Container } from 'semantic-ui-react';
import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function MyRecipesContainer({ currentUser, filterMySelectedRecipes }) {

    const [ filteredMyRec, setFilteredMyRec ] = useState([...currentUser.reposted_recipes])

    return (
        <div style={{textAlign: "center"}}>
            <Container>
            <h2>My Saved Recipes</h2>
            <p>How much free time do you have?</p>
            <TimeSelector filterForTime={filterMySelectedRecipes} />
            {/* <p>(minutes)</p> */}
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