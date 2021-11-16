import React from "react";
import { Header } from 'semantic-ui-react';

function RecipeInstructions({ recipeObj }) {
    return (
        <div style={{ textAlign: "center" }}>
            <Header as='h3' icon textAlign='center'>
                {/* <Icon name='users' circular /> */}
                <Header.Content>Steps</Header.Content>
            </Header>
            {recipeObj.instructions.split("\n").map((step, index) => <p>{index + 1}. {step}</p>)}
        </div>
    )
}

export default RecipeInstructions;