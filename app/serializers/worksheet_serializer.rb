class WorksheetSerializer < ActiveModel::Serializer
  attributes :id, :description, :grade, :files, :topic
  has_one :category
end
