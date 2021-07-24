class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, format:  /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
end
