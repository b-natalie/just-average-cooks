import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Button, Image } from 'semantic-ui-react'
import EditIngredientsContainer from "./EditIngredientsContainer";

function RecipeEditForm() {

    const recipeId = useParams().id;
    const history = useHistory()
    const [ recIngsArr, setRecIngsArr ] = useState([])

    const [ recipeObj, setRecipeObj ] = useState({
        rec_ings: [],
        instructions: "",
        creator: {},
        comments: []
    })

    useEffect(() => {
        fetch(`/api/v1/recipes/${recipeId}`)
        .then(resp => resp.json())
        .then(recipe => {
            setRecipeObj(recipe)
            setRecIngsArr(recipe.rec_ings)
        })
    }, [])


    return (
        <div style={{ textAlign: "center" }}>
            <Form onSubmit={e => e.preventDefault()}>
            <Form.Field>
                <label>Name</label>
                <input name="name" value={recipeObj.name} />
            </Form.Field>
            <Form.Field>
                <label>Image</label>
                <input name="image" value={recipeObj.image} />
                <Image centered src={recipeObj.image} size='small' />
            </Form.Field>
            <EditIngredientsContainer recIngsArr={recIngsArr} setRecIngsArr={setRecIngsArr} recipeId={recipeObj.id} />
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        </div>
    )
}

export default RecipeEditForm;