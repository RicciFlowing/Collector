class Attachment < ActiveRecord::Base
  belongs_to :worksheet
  validates :worksheet, presence: true
  mount_uploader :file, FileUploader


    def get_content
        text = read_text
        text.gsub!(/\s\s+/, ' ')
        text
    end

    def send_content
      begin
        text = read_text
        text.gsub!(/\s\s+/, ' ')
        self.worksheet.add_content(text)
      rescue
      end
    end

    private
    def read_text
        data = File.read self.file.path
        text = Yomu.read :text, data
        text = sanatize(text)
    end


end
