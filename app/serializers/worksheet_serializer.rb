class WorksheetSerializer < ActiveModel::Serializer
  attributes :id, :description, :grade, :topic

  has_one :category
end
