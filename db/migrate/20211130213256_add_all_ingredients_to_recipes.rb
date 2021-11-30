class AddAllIngredientsToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :api_v1_recipes, :all_ingredients, :string
  end
end
