require 'yomu'

class Worksheet < ActiveRecord::Base
  belongs_to :category

  include PgSearch

  mount_uploader :file, FileUploader
  validates_numericality_of :klass

  def set_content
    data = File.read self.file.path
    text = Yomu.read :text, data
    text.gsub!(/\s\s+/, ' ')
    self.content = text
  end

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
