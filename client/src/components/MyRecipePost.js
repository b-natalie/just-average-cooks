import React from "react";
import { Grid, Button } from 'semantic-ui-react';

function MyRecipePost({ myPost, toggleEditMode }) {
    return (
        <div>
            <h3>My thoughts</h3>
            <Grid columns={2} divided centered>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <h4>Simplicity</h4>
                        {myPost ? <p>{myPost.simplicity} of 10</p> : <p>No rating yet</p>}
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <h4>Taste</h4>
                        {myPost ? <p>{myPost.taste} of 10</p> : <p>No rating yet</p>}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br />
            {myPost ? <p>"{myPost.comment}"</p> : null}
            <Button primary onClick={toggleEditMode}>Edit thoughts</Button>
        </div>
    )
}

export default MyRecipePost;