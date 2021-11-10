import React from "react";
import { Link } from "react-router-dom";
import { Header } from 'semantic-ui-react';

function RecipeCreatorComments({ recipeObj, currentUser }) {
    return (
        <div style={{ textAlign: "center" }}>
            <Header as='h3' icon textAlign='center'>
                <Header.Content>Creator</Header.Content>
            </Header>
            <Link to={recipeObj.creator.id === currentUser.id ? "/myrecipes" : `/users/${recipeObj.creator.id}`}><p>{recipeObj.creator.first_name} {recipeObj.creator.last_name}</p></ Link>
            <Header as='h3' icon textAlign='center'>
                <Header.Content>Comments</Header.Content>
            </Header>
            {recipeObj.comments.map(comment => <p>"{comment}"</p>)}
        </div>
    )
}

export default RecipeCreatorComments;