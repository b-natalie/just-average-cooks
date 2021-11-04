class RemoveSubsFromIngredients < ActiveRecord::Migration[6.1]
  def change
    remove_column :ingredients, :sub1_id
    remove_column :ingredients, :sub2_id
  end
end
