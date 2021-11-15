import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, Header } from 'semantic-ui-react';
import RecipeCard from "./RecipeCard";

function OtherUserPage() {

    const userId = useParams().id;
    const [ userObj, setUserObj ] = useState({
        reposted_recipes: []
    })

    useEffect(() => {
        fetch(`/api/v1/users/${userId}`)
        .then(resp => resp.json())
        .then(userData => {
            setUserObj(userData)
        })
    }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{textAlign: "center"}}>
                <Header as='h2' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content>{userObj.first_name} {userObj.last_name}'s Recipes</Header.Content>
                </Header>
                {/* WORK ON BUTTON - CHANGE IF FOLLOWING */}
                <Button primary>Follow</Button>
            </div>
            <br />
            <Grid verticalAlign='middle' columns={5} centered>
                <Grid.Row>
                    {userObj.reposted_recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default OtherUserPage;