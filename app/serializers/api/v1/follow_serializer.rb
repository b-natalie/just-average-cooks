class Api::V1::FollowSerializer < ActiveModel::Serializer
  attributes :id, :followed_id, :fan_id
end
