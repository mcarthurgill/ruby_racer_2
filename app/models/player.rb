class Player < ActiveRecord::Base
  has_and_belongs_to_many :games
  validates :name, uniqueness: true
  validates :name, presence: true
end
