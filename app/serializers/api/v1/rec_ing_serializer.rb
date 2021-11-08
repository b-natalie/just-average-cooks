class Api::V1::RecIngSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :ingredient_id, :name, :quantity, :ingredient_and_quantity

  def name
    self.object.ingredient.name
  end

  def ingredient_and_quantity
    "#{self.object.quantity} #{self.object.ingredient.name}"
  end
end
