class Category < ActiveRecord::Base
  belongs_to :schoolsubject
  has_many :worksheets
end
