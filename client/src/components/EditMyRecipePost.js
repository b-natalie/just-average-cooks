import React, { useState } from "react";
import { Grid, Button, Form, Input } from 'semantic-ui-react';

function EditMyRecipePost({ myPost, updatePost }) {

    const [updatedPost, setUpdatedPost] = useState(myPost);

    function handleInput(e) {
        setUpdatedPost({
            ...updatedPost,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        updatePost(updatedPost);
    }

    return (
        <div>
            {console.log(myPost)}
            <h3>My thoughts</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        name="simplicity"
                        label='Simplicity'
                        placeholder='Out of 10'
                        value={updatedPost.simplicity} 
                        onChange={handleInput} 
                    />
                    <Form.Field
                        control={Input}
                        name="taste"
                        label='Taste'
                        placeholder='Out of 10' 
                        value={updatedPost.taste} 
                        onChange={handleInput}
                    />
                </Form.Group>
                <Form.TextArea fluid name="comment" placeholder='Share your thoughts or tips!' value={updatedPost.comment} onChange={handleInput} />
                <br />
                <Button primary type="submit" onClick={handleSubmit}>Save</Button>
            </Form>
        </div>
    )
}

export default EditMyRecipePost;