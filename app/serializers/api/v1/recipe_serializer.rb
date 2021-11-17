class Api::V1::RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :image, :cuisine, :prep_time, :cook_time, :total_time, :servings, :instructions, :creator

  def creator 
    Api::V1::User.find(self.object.creator_id)
  end

  def total_time
    self.object.prep_time + self.object.cook_time
  end

end
