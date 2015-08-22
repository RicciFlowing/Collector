require 'yomu'

class Worksheet < ActiveRecord::Base
  mount_uploader :file, FileUploader
  validates_numericality_of :klass

  def set_content
    data = File.read self.file.path
    text = Yomu.read :text, data
    text.gsub!(/\s\s+/, ' ')
    self.content = text
  end
end
