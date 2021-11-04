class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :sub1_id, :sub2_id
end
