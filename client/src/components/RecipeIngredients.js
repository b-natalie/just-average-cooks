import React from "react";
import { Header } from 'semantic-ui-react';

function RecipeIngredients({ ingredients }) {
    return (
        <div style={{ textAlign: "center" }}>
            <Header as='h3' icon textAlign='center'>
                <Header.Content>Ingredients</Header.Content>
            </Header>
            {console.log(ingredients)}
            {ingredients.split("\n").map((ing) => <p>{ing}</p>)}
        </div>
    )
}

export default RecipeIngredients;