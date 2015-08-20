class Worksheet < ActiveRecord::Base
  mount_uploader :file, FileUploader
  validates_numericality_of :klass
end
