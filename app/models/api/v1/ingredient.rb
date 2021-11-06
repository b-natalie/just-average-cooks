class Api::V1::Ingredient < ApplicationRecord
    has_many :rec_ings
    has_many :recipes, through: :rec_ings
end
