class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :image, :cuisine, :prep_time, :cook_time, :servings, :instructions, :creator_id

  has_many :ingredients
end
