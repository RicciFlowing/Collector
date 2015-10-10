require 'yomu'

class Worksheet < ActiveRecord::Base
  belongs_to :category
  has_many :attachment
  validates_presence_of :category_id, :topic, :grade
  validates_inclusion_of :grade, :in => 5..13

  include PgSearch

  def set_content
    content = ""
    self.attachment.each do |attachment|
      content += attachment.get_content
    end
    self.content = content
    self.save
  end

  def add_content(text)
    self.content = self.content + text
    self.save
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
