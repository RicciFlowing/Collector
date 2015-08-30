class WorksheetSerializer < ActiveModel::Serializer
  attributes :id, :file, :klass
  has_one :category
end
