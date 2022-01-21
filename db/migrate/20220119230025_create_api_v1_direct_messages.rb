class CreateApiV1DirectMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :api_v1_direct_messages do |t|
      t.string :message

      t.timestamps
    end
  end
end
