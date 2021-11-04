class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipe_id, :simplicity, :taste, :comment

  belongs_to :recipe
end
