class Ingredient < ApplicationRecord
    has_many :ingredients
    has_many :rec_ings, through: :ingredients
end
