import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Image } from 'semantic-ui-react';
import EditIngredientsContainer from "./EditIngredientsContainer";

function AddRecipeForm({ addMyRecipeToMyContainer }) {

    const [ newRecipeAndPost, setNewRecipeAndPost ] = useState({
        name: "",
        link: "",
        image: "",
        cuisine: "",
        prep_time: 0,
        cook_time: 0,
        servings: 0,
        all_ingredients: "",
        instructions: "",
        simplicity: null,
        taste: null,
        comment: ""
    })

    // const [ isAddIngredient, setIsAddIngredient ] = useState(false)
    // const [ recIngsArr, setRecIngsArr ] = useState([])

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
            addMyRecipeToMyContainer(data)
            // setIsAddIngredient(true)
            recipeId = data.id
            history.push(`/recipes`)
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
                <Form.TextArea label='Ingredients' name="all_ingredients" value={newRecipeAndPost.all_ingredients} onChange={handleInput} />
                <Form.TextArea label='Steps (new line = new step)' name="instructions" value={newRecipeAndPost.instructions} onChange={handleInput} />
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Prep time (in minutes)</label>
                        <Input fluid name="prep_time" value={newRecipeAndPost.prep_time} onChange={handleInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Cook time (in minutes)</label>
                        <Input fluid name="cook_time" value={newRecipeAndPost.cook_time} onChange={handleInput} />
                    </Form.Field>
                </Form.Group>
                <Form.TextArea label='Comment' name="comment" value={newRecipeAndPost.comment} onChange={handleInput} />
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Simplicity (of 10)</label>
                        <Input fluid name="simplicity" value={newRecipeAndPost.simplicity} onChange={handleInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Taste (of 10)</label>
                        <Input fluid name="taste" value={newRecipeAndPost.taste} onChange={handleInput} />
                    </Form.Field>
                </Form.Group>
                <Form.Button type='submit' primary onClick={handleSubmit}>Save</Form.Button>
            </Form>
                {/* <Button primary onClick={handleSubmit}>Add details</Button>
            </Form> */}
        </div>
    )
}

export default AddRecipeForm;