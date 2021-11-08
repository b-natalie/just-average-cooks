import React from "react";
import { Header, Image } from 'semantic-ui-react';

function RecipeCreatorComments({ recipeObj }) {
    return (
        <div style={{ textAlign: "center" }}>
            <Header as='h3' icon textAlign='center'>
                {/* <Icon name='users' circular /> */}
                <Header.Content>Creator</Header.Content>
            </Header>
            <p>{recipeObj.creator.first_name} {recipeObj.creator.last_name}</p>
            <Header as='h3' icon textAlign='center'>
                {/* <Icon name='users' circular /> */}
                <Header.Content>Comments</Header.Content>
            </Header>
            {recipeObj.comments.map(comment => <p>"{comment}"</p>)}
        </div>
    )
}

export default RecipeCreatorComments;