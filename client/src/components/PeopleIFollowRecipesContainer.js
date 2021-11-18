import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function PeopleIFollowRecipesContainer({ filteredRecIFollow, filterFollowRec }) {
    return (

        <div style={{textAlign: "center"}}>
            <h2>Recipes From People I Follow</h2>
            <h4>How many free minutes do you have?</h4>
            <TimeSelector filterForTime={filterFollowRec} />
            <Grid verticalAlign='middle' columns={5} centered >
                <Grid.Row>
                    {/* {filteredRecIFollow.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)} */}
                    {filteredRecIFollow.length > 0 ? filteredRecIFollow.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <h3>You are currently not following anyone<br/><br/>Check out the <Link to="/recipes">discover page</Link></h3> }
                </Grid.Row>
            </Grid>
        </div>


        // <Grid verticalAlign='middle' columns={5} centered>
        //     <Grid.Row>
        //         {filteredRecIFollow.length > 0 ? filteredRecIFollow.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <h3>You are currently not following anyone<br/><br/>Check out the <Link to="/recipes">discover page</Link></h3> }
        //     </Grid.Row>
        // </Grid>
    )
}

export default PeopleIFollowRecipesContainer;