class Recipe < ApplicationRecord
    has_many :rec_ings
    has_many :ingredients, through: :rec_ings
    has_many :posts
    has_many :users, through: :posts
end
