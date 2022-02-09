import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import image from "../AddNewRecipe.jpg"

function AddRecipeCard() {
    return (
        <Grid.Column>
            <Link to={"/recipes/new"}>
                <Image
                    rounded
                    src={image}
                    size='medium'
                    target='_blank'
                />
                <h3>Add new recipe</h3>
            </Link>
        </Grid.Column>
    )
}

export default AddRecipeCard;