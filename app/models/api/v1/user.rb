class Api::V1::User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :recipes, through: :posts
    # has_many :follows, foreign_key: :followed_id
    # has_many :fans, foreign_key: :fan_id, :class_name => "Follow"
    # has_many :followeds, foreign_key: :followed_id, :class_name => "Follow"
    has_many :following_me, foreign_key: :followed_id, :class_name => "Follow"
    has_many :fans, through: :following_me
    has_many :followed_by_me, foreign_key: :fan_id, :class_name => "Follow"
    has_many :followed, through: :followed_by_me

    validates :email, uniqueness: true
    # validates :first_name, :last_name, :password, :password_confirmation, presence: true
    validates :first_name, :last_name, presence: true
end
