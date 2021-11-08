import React from "react";
import { Header } from 'semantic-ui-react';

function RecipeIngredients({ recipeObj }) {
    return (
        <div style={{ textAlign: "center" }}>
            <Header as='h3' icon textAlign='center'>
                {/* <Icon name='users' circular /> */}
                <Header.Content>Ingredients</Header.Content>
            </Header>
            {recipeObj.rec_ings.map(ing => <p key={ing.id} >{ing.ingredient_and_quantity}</p>)}
        </div>
    )
}

export default RecipeIngredients;