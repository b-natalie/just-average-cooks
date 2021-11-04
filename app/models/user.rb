class User < ApplicationRecord
    has_secure_password

    validates :email, uniqueness: true
    validates :first_name, :last_name, :password_digest, presence: true
end
