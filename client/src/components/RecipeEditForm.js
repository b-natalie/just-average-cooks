import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Input, Button, Image, Container } from 'semantic-ui-react'

function RecipeEditForm({ deleteRecipe, toggleIsChangeMade }) {

    const recipeId = useParams().id;
    const history = useHistory()
    const [isEdited, setIsEdited] = useState(false)

    const [recipeObj, setRecipeObj] = useState({
        all_ingredients: "",
        instructions: "",
        creator: {},
        comments: []
    })

    const [myPostEdit, setMyPostEdit] = useState({
        comment: "",
        simplicity: null,
        taste: null
    })

    useEffect(() => {
        fetch(`/api/v1/recipes/${recipeId}`)
            .then(resp => resp.json())
            .then(recipe => {
                setRecipeObj(recipe)
                setMyPostEdit(recipe.my_post_info)
            })
    }, [])

    function handleRecipeInput(e) {
        setRecipeObj({
            ...recipeObj,
            [e.target.name]: e.target.value
        })
    }

    function handlePostInput(e) {
        setMyPostEdit({
            ...myPostEdit,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/api/v1/recipes/${recipeId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(recipeObj)
        })
        .then(resp => resp.json())
        .then(
            fetch(`/api/v1/posts/${myPostEdit.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(myPostEdit)
            })
            .then(resp => resp.json())
            .then(data => {
                setIsEdited(!isEdited);
                history.push(`/recipes/${recipeId}`);
                toggleIsChangeMade()
            })
            )
    }

    function handleDelete() {
        fetch(`/api/v1/recipes/${recipeId}`, {
            method: "DELETE"
          })
            .then(data => {
                deleteRecipe(recipeId)
                history.push("/my-recipes")
                toggleIsChangeMade()
            })
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Container>
            <Form onSubmit={handleSubmit} >
                <Form.Field>
                    <label>Name</label>
                    <input name="name" value={recipeObj.name} onChange={handleRecipeInput} />
                </Form.Field>
                <Form.Field>
                    <label>Link</label>
                    <input name="link" value={recipeObj.link} onChange={handleRecipeInput} />
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <input name="image" value={recipeObj.image} onChange={handleRecipeInput} />
                    <br />
                    <Image centered src={recipeObj.image} size='small' />
                </Form.Field>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Servings</label>
                        <Input fluid name="servings" value={recipeObj.servings} onChange={handleRecipeInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Prep time (in minutes)</label>
                        <Input fluid name="prep_time" value={recipeObj.prep_time} onChange={handleRecipeInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Cook time (in minutes)</label>
                        <Input fluid name="cook_time" value={recipeObj.cook_time} onChange={handleRecipeInput} />
                    </Form.Field>
                </Form.Group>
                <Form.TextArea label='Ingredients' name="all_ingredients" value={recipeObj.all_ingredients} onChange={handleRecipeInput} />
                <Form.TextArea label='Steps (new line = new step)' name="instructions" value={recipeObj.instructions} onChange={handleRecipeInput} />
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Simplicity (of 10)</label>
                        <Input fluid name="simplicity" value={myPostEdit.simplicity} onChange={handlePostInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Taste (of 10)</label>
                        <Input fluid name="taste" value={myPostEdit.taste} onChange={handlePostInput} />
                    </Form.Field>
                </Form.Group>
                <Form.TextArea label='Comment' name="comment" value={myPostEdit.comment} onChange={handlePostInput} />
                <Form.Button type='submit' primary onClick={handleSubmit}>Save</Form.Button>
            </Form>
            <br/>
            <Button negative onClick={handleDelete}>Delete</Button>
            </Container>
        </div>
    )
}

export default RecipeEditForm;