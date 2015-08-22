class AddContentToWorksheets < ActiveRecord::Migration
  def up
    add_column :worksheets, :content, :text
  end
  def down
    remove_column :worksheets, :content
  end
end
