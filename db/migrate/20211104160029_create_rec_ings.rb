class CreateRecIngs < ActiveRecord::Migration[6.1]
  def change
    create_table :rec_ings do |t|
      t.integer :recipe_id
      t.integer :ingredient_id
      t.string :quantity

      t.timestamps
    end
  end
end
