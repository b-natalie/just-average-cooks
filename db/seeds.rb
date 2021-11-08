# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User = Api::V1::User
Recipe = Api::V1::Recipe
Ingredient = Api::V1::Ingredient
RecIng = Api::V1::RecIng
Post = Api::V1::Post

puts "Seeding users"

u1 = User.create(first_name: "Natalie", last_name: "Barba", email: "nbarba2010@gmail.com", password: "123", password_confirmation: "123")
u2 = User.create(first_name: "Carrie", last_name: "Bradshaw", email: "carrie@bradshaw.com", password: "123", password_confirmation: "123")
u3 = User.create(first_name: "Samantha", last_name: "Jones", email: "sam@jones.com", password: "123", password_confirmation: "123")
u4 = User.create(first_name: "Miranda", last_name: "Hobbes", email: "miranda@hobbes.com", password: "123", password_confirmation: "123")
u5 = User.create(first_name: "Charlotte", last_name: "York", email: "charlotte@york.com", password: "123", password_confirmation: "123")

puts "Seeding recipes"

r1 = Recipe.create(name: "Vegan Buffalo Cauliflower Tacos", link: "https://www.thissavoryvegan.com/vegan-buffalo-cauliflower-tacos/", image: "https://www.thissavoryvegan.com/wp-content/uploads/2017/06/vegan-buffalo-cauliflower-tacos-2-1456x2048.jpeg", cuisine: "American", prep_time: 5, cook_time: 20, servings: "4 tacos", instructions: "Preheat oven to 425 degrees and line a baking sheet with parchment paper.
In a large bowl combine cauliflower, olive oil, garlic powder, chili powder, pepper and ¼ cup of buffalo sauce. Stir to combine. Spread evenly on baking sheet and cook for 20 minutes, flipping halfway.*
Five minutes before the cauliflower is done cooking, heat up the remaining buffalo sauce in a saucepan or in the microwave.
Remove cauliflower from the oven and place it back in the bowl. Add remaining heated buffalo sauce and stir to combine.
To assemble tacos, load each tortilla with romaine, avocado and cauliflower. Drizzle with ranch and top with cilantro or green onions.", creator_id: u1.id)

r2 = Recipe.create(name: "Easy Tofu Pad Thai", link: "https://minimalistbaker.com/easy-tofu-pad-thai/", image: "https://minimalistbaker.com/wp-content/uploads/2019/01/AMAZING-Easy-Vegan-Pad-Thai-with-Tofu-Ready-in-30-minutes-BIG-flavor-SO-satisfying-betterthantakeout-thai-padthai-plantbased-glutenfree-minimalistbaker-14.jpg", cuisine: "Thai", prep_time: 20, cook_time: 10, servings: "4 servings", instructions: "To a small saucepan, add tamarind, coconut aminos, coconut sugar, chili garlic sauce, lime juice, and vegetarian fish sauce (optional) and heat over medium heat until just simmering. Cook for 30 seconds, stirring occasionally, then turn off heat. Set aside.
Ensure all stir fry ingredients are prepped, including cubed (briefly pressed) tofu, chopped green onions, minced garlic, bean sprouts, and chopped peanuts. If serving with peanut sauce (optional), prepare at this time.
Add Pad Thai noodles to a large bowl and cover with just boiling water. Stir and cover and cook according to package instructions (usually about 5-6 minutes or until al dente).
Drain noodles and toss with a little sesame oil to prevent sticking. Set aside.
Heat a large-rimmed skillet over medium heat. Once hot, add oil and tofu and sauté for about 4 minutes, turning occasionally so it browns on all sides. Add red pepper flakes or Thai chilies, garlic, and coconut aminos (be careful, as the coconut aminos can splatter). Toss gently to combine until garlic is just slightly browned. 
Add noodles, Pad Thai sauce, bean sprouts, green onions, and peanuts and cook over medium-high heat, tossing occasionally (tongs are most useful) for about 2-3 minutes or until the sauce has coated everything and the dish is hot.
To serve, plate with additional garnishes such as lime wedges, bean sprouts, peanut sauce, shredded carrot, cilantro, and sriracha or chili garlic sauce (all optional).
Leftovers will keep in the refrigerator for approximately 3-4 days.", creator_id: u2.id)

r3 = Recipe.create(name: "Easy Avocado Salsa", link: "https://frommybowl.com/easy-avocado-salsa/", image: "https://frommybowl.com/wp-content/uploads/2018/03/Easy_Avocado_Lime_Salsa_7_Ingredients_From_My_Bowl-4.jpg", cuisine: "Mexican", prep_time: 10, cook_time: 0, servings: "3-4 servings", instructions: "Add all ingredients, except for the Avocado, to a medium bowl. Mix well. Add additional Salt to taste, if necessary.
Gently fold in the Avocado, and serve as desired.", creator_id: u3.id)

r4 = Recipe.create(name: "Chili Lime Mango Margaritas", link: "https://minimalistbaker.com/chili-lime-mango-margaritas/", image: "https://minimalistbaker.com/wp-content/uploads/2015/04/SIMPLE-Mango-Chili-Lime-Margaritas-Perfectly-tart-sweet-and-spicy-vegan-minimalistbaker.jpg", cuisine: "Drinks", prep_time: 10, cook_time: 0, servings: "3 margaritas", instructions: "Add all margarita ingredients to a blender and blend until creamy and smooth. Taste and adjust sweetness / strength of alcohol as desired.
To chill, either blend in a large handful of ice cubes to make a frozen margarita or transfer half of the mixture to a cocktail shaker with plenty of ice and shake vigorously.
Rim serving glasses with a lime wedge and immediately dip in salt/chili powder mixture (or sub just salt or sugar), and fill with 1 large ice cube or several small. Pour over margarita and garnish with lime wedge.", creator_id: u1.id)

# r5 = Recipe.create(name: "", link: "", image: "", cuisine: "", prep_time: , cook_time: , servings: "", instructions: "", creator_id: )

# r6 = Recipe.create(name: "", link: "", image: "", cuisine: "", prep_time: , cook_time: , servings: "", instructions: "", creator_id: )

# r7 = Recipe.create(name: "", link: "", image: "", cuisine: "", prep_time: , cook_time: , servings: "", instructions: "", creator_id: )

# r8 = Recipe.create(name: "", link: "", image: "", cuisine: "", prep_time: , cook_time: , servings: "", instructions: "", creator_id: )

puts "Seeding ingredients"

i1 = Ingredient.create(name: "Cauliflower")
i2 = Ingredient.create(name: "Olive oil")
i3 = Ingredient.create(name: "Garlic powder")
i4 = Ingredient.create(name: "Chili powder")
i5 = Ingredient.create(name: "Buffalo sauce")
i6 = Ingredient.create(name: "Pepper")
i7 = Ingredient.create(name: "Tortillas")
i8 = Ingredient.create(name: "Lettuce")

i9 = Ingredient.create(name: "Red onion")
i10 = Ingredient.create(name: "Jalapeño")
i11 = Ingredient.create(name: "Cilantro")
i12 = Ingredient.create(name: "Tomato")
i13 = Ingredient.create(name: "Cumin")
i14 = Ingredient.create(name: "Lime")
i15 = Ingredient.create(name: "Salt")
i16 = Ingredient.create(name: "Avocado")

i17 = Ingredient.create(name: "Mango")
i18 = Ingredient.create(name: "Orange juice")
i19 = Ingredient.create(name: "Tequila")
i20 = Ingredient.create(name: "Hot sauce")
i21 = Ingredient.create(name: "Maple syrup")
i22 = Ingredient.create(name: "Chili powder")

puts "Seeding recipe_ingredients"

ri1 = RecIng.create(recipe_id: r1.id, ingredient_id: i1.id, quantity: "1/2 head")
ri2 = RecIng.create(recipe_id: r1.id, ingredient_id: i2.id, quantity: "4 teaspoons")
ri3 = RecIng.create(recipe_id: r1.id, ingredient_id: i3.id, quantity: "1 teaspoon")
ri4 = RecIng.create(recipe_id: r1.id, ingredient_id: i4.id, quantity: "1 teaspoon")
ri5 = RecIng.create(recipe_id: r1.id, ingredient_id: i5.id, quantity: "3/4 cup")
ri6 = RecIng.create(recipe_id: r1.id, ingredient_id: i6.id, quantity: "to taste")
ri7 = RecIng.create(recipe_id: r1.id, ingredient_id: i7.id, quantity: "8")
ri8 = RecIng.create(recipe_id: r1.id, ingredient_id: i8.id, quantity: "1 head")
ri9 = RecIng.create(recipe_id: r1.id, ingredient_id: i16.id, quantity: "1")

ri10 = RecIng.create(recipe_id: r3.id, ingredient_id: i9.id, quantity: "1 small")
ri11 = RecIng.create(recipe_id: r3.id, ingredient_id: i10.id, quantity: "1")
ri12 = RecIng.create(recipe_id: r3.id, ingredient_id: i11.id, quantity: "1/4 cup")
ri13 = RecIng.create(recipe_id: r3.id, ingredient_id: i12.id, quantity: "1 cup")
ri14 = RecIng.create(recipe_id: r3.id, ingredient_id: i13.id, quantity: "1 teaspoon")
ri15 = RecIng.create(recipe_id: r3.id, ingredient_id: i14.id, quantity: "1")
ri16 = RecIng.create(recipe_id: r3.id, ingredient_id: i15.id, quantity: "1/2 teaspoon")
ri17 = RecIng.create(recipe_id: r3.id, ingredient_id: i16.id, quantity: "2")

ri18 = RecIng.create(recipe_id: r4.id, ingredient_id: i17.id, quantity: "1 ripe")
ri19 = RecIng.create(recipe_id: r4.id, ingredient_id: i18.id, quantity: "1 cup")
ri20 = RecIng.create(recipe_id: r4.id, ingredient_id: i19.id, quantity: "3 ounces")
ri21 = RecIng.create(recipe_id: r4.id, ingredient_id: i14.id, quantity: "2 small")
ri22 = RecIng.create(recipe_id: r4.id, ingredient_id: i21.id, quantity: "1 tablespoon")

puts "Seeding posts"

p1 = Post.create(user_id: u1.id, recipe_id: r1.id, simplicity: 7, taste: 7)
p2 = Post.create(user_id: u2.id, recipe_id: r3.id, simplicity: 8, taste: 8)
p3 = Post.create(user_id: u3.id, recipe_id: r3.id, simplicity: 10, taste: 8)
p4 = Post.create(user_id: u4.id, recipe_id: r3.id, simplicity: 7, taste: 9)
p5 = Post.create(user_id: u5.id, recipe_id: r3.id, simplicity: 9, taste: 8)
p6 = Post.create(user_id: u1.id, recipe_id: r4.id, simplicity: 9, taste: 9)