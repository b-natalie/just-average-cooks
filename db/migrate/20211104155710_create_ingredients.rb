class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :sub1_id
      t.integer :sub2_id

      t.timestamps
    end
  end
end
