class AddAllIngredientsInRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :api_v1_recipes, :all_ingredients, :string
    # rename_column :api_v1_recipes, :all_ingredients, :all_ingredients
  end
end
