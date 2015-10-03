require 'yomu'

class Worksheet < ActiveRecord::Base
  belongs_to :category
  has_many :attachment
  validates_presence_of :category_id, :topic, :grade
  validates_inclusion_of :grade, :in => 5..13

  mount_uploader :files, FileUploader

  def read_text_from_file
    data = File.read self.files.path
    text = Yomu.read :text, data
  end

  def set_content
    text = read_text_from_file
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
