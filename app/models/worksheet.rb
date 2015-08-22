require 'yomu'

class Worksheet < ActiveRecord::Base
  mount_uploader :file, FileUploader
  validates_numericality_of :klass

  def set_content
    data = File.read self.file.path
    self.content = Yomu.read :text, data
  end
end
