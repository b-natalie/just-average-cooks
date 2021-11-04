class RecIngSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :ingredient_id, :quantity, :ingredient_and_quantity

  def ingredient_and_quantity
    "#{self.object.quantity} #{self.object.ingredient.name}"
  end
end
