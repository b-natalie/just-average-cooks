import React from "react";
import { Grid, Image } from 'semantic-ui-react';
import RecipeCard from "./RecipeCard";

function RecipeContainer({ allRecipes }) {

    const quarter = allRecipes.length/4
    const col1 = allRecipes.slice(0, quarter)
    const col2 = allRecipes.slice(quarter, 2 * quarter)
    const col3 = allRecipes.slice(2 * quarter, 3 * quarter)
    const col4 = allRecipes.slice(3 * quarter)

    return (
        <Grid verticalAlign='middle' columns={5} centered>
            <Grid.Row>
                {/* <Grid.Column>
                    {col1.map(recipe => {
                        return ( <Image
                            src={recipe.image}
                            as='a'
                            size='medium'
                            href={recipe.link}
                            target='_blank'
                          /> )
                    })}
                </Grid.Column>
                <Grid.Column>
                    {col2.map(recipe => {
                        return ( <Image
                            src={recipe.image}
                            as='a'
                            size='medium'
                            href={recipe.link}
                            target='_blank'
                          /> )
                    })}
                </Grid.Column>
                <Grid.Column>
                    {col3.map(recipe => {
                        return ( <Image
                            src={recipe.image}
                            as='a'
                            size='medium'
                            href={recipe.link}
                            target='_blank'
                          /> )
                    })}
                </Grid.Column>
                <Grid.Column>
                    {col4.map(recipe => {
                        return ( <Image
                            src={recipe.image}
                            as='a'
                            size='medium'
                            href={recipe.link}
                            target='_blank'
                          /> )
                    })}
                </Grid.Column> */}
                {allRecipes.map(recipe => <RecipeCard key ={recipe.id} recipe={recipe}/>)}
            </Grid.Row>
        </Grid>
    )
}

export default RecipeContainer;