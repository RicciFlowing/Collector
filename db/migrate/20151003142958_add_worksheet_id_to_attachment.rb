class AddWorksheetIdToAttachment < ActiveRecord::Migration
  def change
    add_reference :attachments, :worksheet, index: true
    add_foreign_key :attachments, :worksheets
  end
end
