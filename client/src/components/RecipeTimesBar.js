import React from "react";
import { Grid } from 'semantic-ui-react';

function RecipeTimesBar({ recipeObj }) {
    return (
        <Grid columns={3} divided centered>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <h4>Prep Time</h4>
                    <p>{recipeObj.prep_time} minutes</p>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <h4>Cook Time</h4>
                    <p>{recipeObj.cook_time} minutes</p>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <h4>Total Time</h4>
                    <p>{recipeObj.total_time} minutes</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default RecipeTimesBar;