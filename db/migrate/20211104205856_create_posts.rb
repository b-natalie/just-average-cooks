class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :recipe_id
      t.integer :simplicity
      t.integer :taste
      t.string :comment

      t.timestamps
    end
  end
end
