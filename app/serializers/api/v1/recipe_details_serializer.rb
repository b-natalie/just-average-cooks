class Api::V1::RecipeDetailsSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :image, :cuisine, :prep_time, :cook_time, :servings, :instructions, :total_time, :average_simplicity, :average_taste, :post_count, :creator, :comments, :my_post_info, :simplicity_count, :taste_count, :all_ingredients

  has_many :rec_ings

  def total_time
    self.object.prep_time + self.object.cook_time
  end

  def post_count
    self.object.posts.count
  end

  def simplicity_count
    self.object.posts.select{|post| post.simplicity != nil && post.simplicity !=0}.count
  end

  def average_simplicity
    self.object.posts.average(:simplicity)
  end

  def average_taste
    self.object.posts.average(:taste)
  end

  def taste_count
    self.object.posts.select{|post| post.taste != nil && post.taste !=0}.count
  end

  def creator 
    Api::V1::User.find(self.object.creator_id)
  end

  def comments
     self.object.posts.pluck(:comment)
  end

  def my_post_info
    current_user.posts.find_by(recipe_id: self.object.id)
  end

end
