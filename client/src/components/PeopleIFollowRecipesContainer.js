import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container } from "semantic-ui-react";
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function PeopleIFollowRecipesContainer({ filteredRecIFollow, filterFollowRec }) {
    return (
        <div style={{textAlign: "center"}}>
            <Container>
            <h2>Recipes From People I Follow</h2>
            <p>How much free time do you have?</p>
            <TimeSelector filterForTime={filterFollowRec} />
            <p>(minutes)</p>
            <Grid columns={5} centered >
            {/* <Grid verticalAlign='middle' columns={5} centered > */}
                <Grid.Row>
                    {/* {filteredRecIFollow.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)} */}
                    {filteredRecIFollow.length > 0 ? filteredRecIFollow.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <h3>You are currently not following anyone<br/><br/>Check out the <Link to="/recipes">discover page</Link></h3> }
                </Grid.Row>
            </Grid>
            </Container>
        </div>


        // <Grid verticalAlign='middle' columns={5} centered>
        //     <Grid.Row>
        //         {filteredRecIFollow.length > 0 ? filteredRecIFollow.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <h3>You are currently not following anyone<br/><br/>Check out the <Link to="/recipes">discover page</Link></h3> }
        //     </Grid.Row>
        // </Grid>
    )
}

export default PeopleIFollowRecipesContainer;