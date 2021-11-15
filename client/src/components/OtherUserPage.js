import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, Header } from 'semantic-ui-react';
import RecipeCard from "./RecipeCard";

function OtherUserPage({ currentUser }) {

    const userId = useParams().id
    const [ userObj, setUserObj ] = useState({
        reposted_recipes: [],
        follows_for_user: []
    })

    const [ isFollowedByMe, setIsFollowedByMe ] = useState(false)
    const [ followId, setFollowId ] = useState(null)

    useEffect(() => {
        fetch(`/api/v1/users/${userId}`)
        .then(resp => resp.json())
        .then(userData => {
            setUserObj(userData)
            if (userData.follows_for_user.find(person => person.fan_id === currentUser.id)) {
                setIsFollowedByMe(true)
                setFollowId(userData.follows_for_user.find(person => person.fan_id === currentUser.id).id)
            }
        })
    }, [])

    function handleFollow() {
        fetch("/api/v1/follows", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                fan_id: currentUser.id,
                followed_id: userId
            })
        })
        .then(setIsFollowedByMe(true))
    }

    function handleUnfollow() {
        fetch(`/api/v1/follows/${followId}`, {
            method: "DELETE"
        })
        .then(setIsFollowedByMe(false))
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{textAlign: "center"}}>
                <Header as='h2' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content>{userObj.first_name} {userObj.last_name}'s Recipes</Header.Content>
                </Header>
                {/* WORK ON BUTTON - CHANGE IF FOLLOWING */}
                {isFollowedByMe ? <Button onClick={handleUnfollow}>Unfollow</Button> : <Button primary onClick={handleFollow}>Follow</Button>}
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