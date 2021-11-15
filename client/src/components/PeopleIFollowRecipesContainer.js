import React from "react";
import { Grid } from "semantic-ui-react";
import RecipeCard from "./RecipeCard";

function PeopleIFollowRecipesContainer({ RecIFollowArr }) {
    return (
        <Grid verticalAlign='middle' columns={5} centered>
            <Grid.Row>
                {RecIFollowArr.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
            </Grid.Row>
        </Grid>
    )
}

export default PeopleIFollowRecipesContainer;