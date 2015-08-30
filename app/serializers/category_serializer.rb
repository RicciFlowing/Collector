class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :worksheets
  #has_one :schoolsubject
end
