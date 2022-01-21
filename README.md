# README
# Summary

An app for people who are not great at cooking or don’t want to spend hours in the kitchen to save and share simple, tasty recipes that anyone can make. 

Keeping in mind that this is not for gourmet chefs, the idea is not to create original recipes, but to pull recipes from the internet, save them for future use, and share any tips for other not-so-great cooks (e.g. a substitution for a random ingredient most people don’t have readily available at home).

# User stories

- A user signs in
- There is a discovery feed of recipes - I am thinking this will look similar to pinterest, just a bunch of photos of food and their titles
- If you click on a photo, you’ll be taken to the recipe details page
- Here, you can save the recipe to your own account
- On the user’s account page, they’ll find all of their own saved recipes
- Also on the user’s account page, they’ll be able to add a new recipe
- Each recipe post will include a link to the poster’s account
- A user will be able to follow other users
- There will be a second feed dedicated to the posts of the people the user is following
- Filters on feed according to time (0-20 min, 21-40 min, 41+ min)

# Models
- User
    first_name
    last_name
    email
    password
- Recipe
    name
    link
    image
    prep_time, int
    cook_time, int
    servings
    instructions
    creator_id, int
- Post
    user_id
    recipe_id
    simplicity
    taste
    comment
- Follow
    user_id for follower
    user_id for followed

# Associations
User >- Post -< Recipe
User >- Follow -< User

# Future extensions
- Email - weekly digest of what’s new
- DM capabilities using websockets
