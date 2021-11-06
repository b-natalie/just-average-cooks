class Api::V1::Post < ApplicationRecord
    belongs_to :recipe
    belongs_to :user 
end
