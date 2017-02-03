class Meal < ApplicationRecord
  validates :title, :kind, :price, presence: true
  enum kind: %i[first_course main_course salad dessert drink other]
end
