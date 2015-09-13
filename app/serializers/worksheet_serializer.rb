class WorksheetSerializer < ActiveModel::Serializer
  attributes :id, :description, :grade, :file, :topic
  has_one :category
end
