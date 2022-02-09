import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Container } from "semantic-ui-react";
import RecipeCard from "./RecipeCard";
import TimeSelector from "./TimeSelector";

function PeopleIFollowRecipesContainer({ recIFollowArr }) {

    const [ filteredRecIFollow, setFilteredRecIFollow ] = useState([...recIFollowArr])

    function filterRecipes(time, searchTerm) {
        if (time === "0") {
            setFilteredRecIFollow(recIFollowArr.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) && recipe.cook_time + recipe.prep_time < 21))
        } else if (time === "21") {
            setFilteredRecIFollow(recIFollowArr.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) && recipe.cook_time + recipe.prep_time > 20))
        } else if (time === "41") {
            setFilteredRecIFollow(recIFollowArr.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) && recipe.cook_time + recipe.prep_time > 41))
        } else {
            setFilteredRecIFollow([...recIFollowArr].filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase())))
        }
    }

    return (
        <div style={{textAlign: "center"}}>
            <Container>
            <h2>Recipes From People I Follow</h2>
            <p>How much time do you have? <br /> (in minutes)</p>
            <TimeSelector filterRecipes={filterRecipes} />
            <p>(minutes)</p>
            <Grid columns={5} centered >
            {/* <Grid verticalAlign='middle' columns={5} centered > */}
                <Grid.Row>
                    {/* {filteredRecIFollow.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)} */}
                    {filteredRecIFollow.length > 0 ? filteredRecIFollow.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />) : <h3>Nothing to see here, yet!<br/><br/>Check out the <Link to="/recipes">discover page</Link></h3> }
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