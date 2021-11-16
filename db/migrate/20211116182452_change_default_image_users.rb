class ChangeDefaultImageUsers < ActiveRecord::Migration[6.1]
  def change
    change_column_default :api_v1_users, :image, "https://i.imgur.com/uNxjVRP.png"
  end
end
