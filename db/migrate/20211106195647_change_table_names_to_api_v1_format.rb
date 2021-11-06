class ChangeTableNamesToApiV1Format < ActiveRecord::Migration[6.1]
  def change
    rename_table :ingredients, :api_v1_ingredients
    rename_table :posts, :api_v1_posts
    rename_table :rec_ings, :api_v1_rec_ings
    rename_table :recipes, :api_v1_recipes
    rename_table :users, :api_v1_users
  end
end
