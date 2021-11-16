import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Image } from 'semantic-ui-react';
import EditIngredientsContainer from "./EditIngredientsContainer";

function AddRecipeForm() {

    const [ newRecipeAndPost, setNewRecipeAndPost ] = useState({
        name: "",
        link: "",
        image: "",
        cuisine: "",
        prep_time: 0,
        cook_time: 0,
        servings: 0,
        instructions: "",
        simplicity: null,
        taste: null,
        comment: ""
    })

    const [ isAddIngredient, setIsAddIngredient ] = useState(false)
    const [ recIngsArr, setRecIngsArr ] = useState([])

    let history = useHistory();
    let recipeId;

    function handleInput(e) {
        setNewRecipeAndPost({
            ...newRecipeAndPost,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/v1/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newRecipeAndPost)
        })
        .then(resp => resp.json())
        .then(data => {
            setIsAddIngredient(true)
            recipeId = data.id
            history.push(`/recipes/${recipeId}/edit`)
        })
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input name="name" onChange={handleInput}/>
                </Form.Field>
                <Form.Field>
                    <label>Link</label>
                    <input name="link" onChange={handleInput}/>
                </Form.Field>
                <Form.Field>
                    <label>Image url</label>
                    <input name="image" onChange={handleInput}/>
                    <br />
                    <Image centered src={newRecipeAndPost.image} size='small' />
                </Form.Field>
                <Button primary onClick={handleSubmit}>Add details</Button>
            </Form>
        </div>
    )
}

export default AddRecipeForm;