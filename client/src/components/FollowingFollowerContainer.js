import React from "react";
import { Grid, Header, Image, List } from 'semantic-ui-react';
import FollowingFollowerCard from "./FollowingFollowerCard";

function FollowingFollowerContainer({ peopleIFollow, peopleFollowingMe }) {
    return (
        <div>
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
        </div>
    )
}

export default FollowingFollowerContainer;