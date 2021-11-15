class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :created_recipes, :reposted_recipes, :people_i_follow_recipes

  def created_recipes
    Api::V1::Recipe.where(creator_id: self.object.id)
  end

  def reposted_recipes
    self.object.recipes
  end

  def people_i_follow_recipes
    feed = []
    self.object.followed.each { |person| feed.concat(person.recipes) }
    feed.uniq
  end
end
