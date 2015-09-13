require 'yomu'

class Worksheet < ActiveRecord::Base
  belongs_to :category
  validates_presence_of :category_id

  mount_uploader :file, FileUploader


  def set_content
    data = File.read self.file.path
    text = Yomu.read :text, data
    text.gsub!(/\s\s+/, ' ')
    self.content = text
  end

  include PgSearch

  pg_search_scope(
    :search,
    against: %i(
      content
      description
    ),
    using: {
      tsearch: {
        dictionary: "german",
      }
    }
  )
end
