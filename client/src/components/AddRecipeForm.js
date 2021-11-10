import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Image } from 'semantic-ui-react'

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
        simplicity: 0,
        taste: 0,
        comment: ""
    })

    let history = useHistory();

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
        .then(data => history.push("/myrecipes"))
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
                {/* <EditIngredientsContainer recIngsArr={recIngsArr} setRecIngsArr={setRecIngsArr} recipeId={recipeObj.id} /> */}
                <Form.TextArea label='Steps (one sentence = one step)' name="instructions" onChange={handleInput} />
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Prep time (in minutes)</label>
                        <Input fluid name="prep_time" onChange={handleInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Cook time (in minutes)</label>
                        <Input fluid name="cook_time" onChange={handleInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Servings</label>
                        <Input fluid name="servings" onChange={handleInput} />
                    </Form.Field>
                </Form.Group>
                <Form.TextArea label='Comment' name="comment" onChange={handleInput} />
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Simplicity (of 10)</label>
                        <Input fluid name="simplicity" onChange={handleInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Taste (of 10)</label>
                        <Input fluid name="taste" onChange={handleInput} />
                    </Form.Field>
                </Form.Group>
                <Button type='submit' onClick={handleSubmit}>Save</Button>
            </Form>
        </div>
    )
}

export default AddRecipeForm;