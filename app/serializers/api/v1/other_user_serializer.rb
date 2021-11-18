class Api::V1::OtherUserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :image, :created_recipes, :reposted_recipes, :follows_for_user
  
    def created_recipes
      Api::V1::Recipe.where(creator_id: self.object.id)
    end
  
    def reposted_recipes
      self.object.recipes
    end
  
    # def people_who_follow
    #     # @currentUser.followed.find(self.object.id)
    #     self.object.followed
    # end

    def follows_for_user
        self.object.following_me
    end

  end
  