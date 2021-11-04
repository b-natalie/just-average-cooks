class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :recipes, through: :posts

    validates :email, uniqueness: true
    validates :first_name, :last_name, :password_digest, presence: true
end
