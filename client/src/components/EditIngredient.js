import React from "react";
import { Grid, Button } from 'semantic-ui-react'

function EditIngredient({ ing, handleDelete }) {

    return (
        <Grid columns={4} style={{ textAlign: "center" }} >
            <Grid.Column/>
            <Grid.Column>
                <p>{ing.name}, {ing.quantity}</p>
            </Grid.Column>
            <Grid.Column>
                <Button negative compact size="mini" onClick={e => handleDelete(ing)}>X</Button>
            </Grid.Column>
            <Grid.Column/>
        </Grid>
        // <div>
        //     <p>
        //         {ing.name}, {ing.quantity} <Button negative compact size="mini">X</Button>
        //     </p>
        // </div>
    )
}

export default EditIngredient;