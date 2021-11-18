import React from "react";
import { Grid, Header, Image, List, Container } from 'semantic-ui-react';
import FollowingFollowerCard from "./FollowingFollowerCard";

function FollowingFollowerContainer({ peopleIFollow, peopleFollowingMe }) {
    return (
        <div>
            <Container style={{maxWidth: 500}}>
            <Grid>
                <Grid.Column width={8}>
                    <Grid.Row>
                        <Header>Following Me ({peopleFollowingMe.length})</ Header>
                    </Grid.Row>
                    <List >
                        {peopleFollowingMe.map(person => <FollowingFollowerCard person={person} />)}
                    </List>
                </Grid.Column>

                <Grid.Column width={8}>
                    <Grid.Row>
                        <Header>I Am Following ({peopleIFollow.length})</ Header>
                    </Grid.Row>
                    <List >
                        {peopleIFollow.map(person => <FollowingFollowerCard person={person} />)}
                    </List>
                </Grid.Column>
            </Grid>
            </Container>
        </div>
    )
}

export default FollowingFollowerContainer;