class Api::V1::Follow < ApplicationRecord
    # belongs_to :followed, :class_name => "User"
    belongs_to :followed, foreign_key: :followed_id, :class_name => "User"
    # belongs_to :fan, :class_name => "User"
    belongs_to :fan, foreign_key: :fan_id, :class_name => "User"

    validates :followed_id, uniqueness: { scope: :fan_id }
    validates :fan_id, uniqueness: { scope: :followed_id }
end
