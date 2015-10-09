class AttachmentSerializer < ActiveModel::Serializer
  attributes :id, :url

  def url
    "http://localhost:3000/attachments/#{object.id.to_s}/download"
  end
end
