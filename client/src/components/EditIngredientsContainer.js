import React, { useState } from "react";
import { Header, Button, Form } from 'semantic-ui-react';
import EditIngredient from "./EditIngredient";

function EditIngredientsContainer({ recIngsArr, setRecIngsArr, recipeId }) {

    const [ isAddIngredient, setIsAddIngredient ] = useState(false)
    const [ newIngredient, setNewIngredient ] = useState("")
    const [ newQuantity, setNewQuantity ] = useState("")

    function handleAdd(e) {
        e.preventDefault();
        fetch("/api/v1/rec_ings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                recipe_id: recipeId,
                ingredient_name: newIngredient,
                quantity: newQuantity
            })
        })
        .then(resp => resp.json())
        .then(data => {
            setRecIngsArr([...recIngsArr, data]);
            setIsAddIngredient(!isAddIngredient);
        })
    }

    function handleDelete(recIngToDelete) {
        fetch(`/api/v1/rec_ings/${recIngToDelete.id}`, {
            method: "DELETE"
        })
        .then(data => {
            setRecIngsArr(recIngsArr.filter(recIng => recIng.id !== recIngToDelete.id))
        })
    }

    function showIngredientInputField() {
        return (
            <Form onSubmit={handleAdd}>
                <Form.Field>
                    <label>New Ingredient</label>
                    <input name="name" placeholder="Tomato, Lime, Cucumber,..." onChange={e => setNewIngredient(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Quantity</label>
                    <input name="quantity" placeholder="3 medium, 1/4 cup, 1 teaspoon,..." onChange={e => setNewQuantity(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={handleAdd}>Add</Button>
            </Form>
        )
    }

    return (
        <div >
            <Header as='h3' icon textAlign='center'>
                {/* <Icon name='users' circular /> */}
                <Header.Content>Ingredients</Header.Content>
            </Header>
            {recIngsArr.map(ing => <EditIngredient key={ing.id} ing={ing} handleDelete={handleDelete}/>)}
            <br />
            {isAddIngredient ? showIngredientInputField() : <Button primary onClick={e => setIsAddIngredient(!isAddIngredient)}>Add ingredient</Button>}
        </div>
    )
}

export default EditIngredientsContainer;