class RecIngSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :ingredient_id, :quantity
end
