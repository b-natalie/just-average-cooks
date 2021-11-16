class FixDefaultValuesForUsers < ActiveRecord::Migration[6.1]
  def change
    change_column_default :api_v1_users, :image, "https://imgur.com/a/XiwS46f"
    change_column_default :api_v1_users, :bio, nil
  end
end
