class Api::V1::DirectMessage < ApplicationRecord
    belongs_to :user
    belongs_to :conversation 
end
