class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :link
      t.string :image
      t.string :cuisine
      t.integer :prep_time
      t.integer :cook_time
      t.string :servings
      t.string :instructions
      t.integer :creator_id

      t.timestamps
    end
  end
end
