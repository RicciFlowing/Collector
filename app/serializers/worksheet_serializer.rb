class WorksheetSerializer < ActiveModel::Serializer
  attributes :id, :description, :grade, :topic, :url
  def url
    ## HACK
    object.files.url
  end
  has_one :category
end
