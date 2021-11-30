class ChangeIngredientsToAllIngredientsInRecipes < ActiveRecord::Migration[6.1]
  def change
    # rename_column :api_v1_recipes, :ingredients, :all_ingredients
    rename_column :api_v1_recipes, :all_ingredients, :all_ingredients
  end
end
