class Api::V1::RecIng < ApplicationRecord
    belongs_to :ingredient
    belongs_to :recipe
end
