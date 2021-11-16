import React, { useState } from "react";
import { Header, Button, Form } from 'semantic-ui-react';
import EditIngredient from "./EditIngredient";

function EditIngredientsContainer({ recIngsArr, setRecIngsArr, recipeId }) {

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
            setNewIngredient("");
            setNewQuantity("");
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

    return (
        <div >
            <Header as='h3' icon textAlign='center'>
                <Header.Content>Ingredients</Header.Content>
            </Header>
            {recIngsArr.map(ing => <EditIngredient key={ing.id} ing={ing} handleDelete={handleDelete}/>)}
            <br />
            <Form onSubmit={handleAdd}>
                <Form.Field>
                    <label>New Ingredient</label>
                    <input name="name" placeholder="Tomato, Lime, Cucumber,..." value={newIngredient} onChange={e => setNewIngredient(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Quantity</label>
                    <input name="quantity" placeholder="3 medium, 1/4 cup, 1 teaspoon,..." value={newQuantity} onChange={e => setNewQuantity(e.target.value)}/>
                </Form.Field>
                <Button type='submit' primary onClick={handleAdd}>Add</Button>
            </Form>
        </div>
    )
}

export default EditIngredientsContainer;