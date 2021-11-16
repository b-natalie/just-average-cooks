import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Input, Button, Image } from 'semantic-ui-react'
import EditIngredientsContainer from "./EditIngredientsContainer";

function RecipeEditForm() {

    const recipeId = useParams().id;
    const history = useHistory()
    const [recIngsArr, setRecIngsArr] = useState([])
    const [isEdited, setIsEdited] = useState(false)

    const [recipeObj, setRecipeObj] = useState({
        rec_ings: [],
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
                setRecIngsArr(recipe.rec_ings)
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
                setIsEdited(!isEdited)
                history.push(`/recipes/${recipeId}`)
            })
        )
    }


    return (
        <div style={{ textAlign: "center" }}>
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
                <EditIngredientsContainer recIngsArr={recIngsArr} setRecIngsArr={setRecIngsArr} recipeId={recipeObj.id} />
                <Form.TextArea label='Steps (new line = new step)' name="instructions" value={recipeObj.instructions} onChange={handleRecipeInput} />
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Prep time (in minutes)</label>
                        <Input fluid name="prep_time" value={recipeObj.prep_time} onChange={handleRecipeInput} />
                    </Form.Field>
                    <Form.Field>
                        <label>Cook time (in minutes)</label>
                        <Input fluid name="cook_time" value={recipeObj.cook_time} onChange={handleRecipeInput} />
                    </Form.Field>
                </Form.Group>
                <Form.TextArea label='Comment' name="comment" value={myPostEdit.comment} onChange={handlePostInput} />
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
                <Button type='submit' primary onClick={handleSubmit}>Save</Button>
            </Form>
        </div>
    )
}

export default RecipeEditForm;