class Attachment < ActiveRecord::Base
  belongs_to :worksheet
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
      ),
      using: {
        tsearch: {
          dictionary: "german",
        }
      }
    )
end
