import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import RecipeCard from "./RecipeCard";

function PeopleIFollowRecipesContainer({ RecIFollowArr }) {
    return (
        <Grid verticalAlign='middle' columns={5} centered>
            <Grid.Row>
                {RecIFollowArr.length > 0 ? RecIFollowArr.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <h3>You are currently not following anyone<br/><br/>Check out the <Link to="/recipes">discover page</Link></h3> }
            </Grid.Row>
        </Grid>
    )
}

export default PeopleIFollowRecipesContainer;