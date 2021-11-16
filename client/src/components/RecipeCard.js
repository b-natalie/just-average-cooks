import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
    return (
        <Grid.Column>
            <Link to={`recipes/${recipe.id}`}>
                <Image
                    rounded
                    src={recipe.image}
                    // as='a'
                    size='medium'
                    target='_blank'
                />
                <h3>{recipe.name}</h3>
            </Link>
        </Grid.Column>
    )
}

export default RecipeCard;