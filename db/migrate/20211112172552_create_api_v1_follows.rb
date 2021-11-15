class CreateApiV1Follows < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_follows do |t|
      t.integer :followed_id
      t.integer :fan_id

      t.timestamps
    end
  end
end
