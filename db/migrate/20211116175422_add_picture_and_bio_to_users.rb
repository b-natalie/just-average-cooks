class AddPictureAndBioToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :api_v1_users, :image, :string
    add_column :api_v1_users, :bio, :string
    change_column_default :api_v1_users, :bio, "https://imgur.com/a/XiwS46f"
  end
end
