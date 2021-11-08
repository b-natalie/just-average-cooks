import React from "react";
import { Grid } from 'semantic-ui-react';

function RecipeRatings({ recipeObj }) {
    return (
        <Grid columns={2} divided centered>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <h4>Simplicity</h4>
                    <p>{recipeObj.average_simplicity} of 10</p>
                    <p>{recipeObj.post_count} ratings</p>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <h4>Taste</h4>
                    <p>{recipeObj.average_taste} of 10</p>
                    <p>{recipeObj.post_count} ratings</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default RecipeRatings;