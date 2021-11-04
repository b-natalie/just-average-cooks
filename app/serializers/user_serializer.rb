class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :created_recipes, :reposted_recipes

  def created_recipes
    Recipe.where(creator_id: self.object.id)
  end

  def reposted_recipes
    self.object.recipes
  end
end
