import React from "react";
import { Grid, Button } from 'semantic-ui-react'

function EditIngredient({ ing, handleDelete }) {

    function deleteIng(e) {
        e.preventDefault()
        handleDelete(ing)
    }

    return (
        <Grid columns={4} style={{ textAlign: "center" }} >
            <Grid.Column/>
            <Grid.Column>
                <p>{ing.name}, {ing.quantity}</p>
            </Grid.Column>
            <Grid.Column>
                <Button negative compact size="mini" onClick={deleteIng}>X</Button>
            </Grid.Column>
            <Grid.Column/>
        </Grid>
    )
}

export default EditIngredient;