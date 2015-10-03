class RemoveFilesFromWorksheet < ActiveRecord::Migration
  def change
    remove_column :worksheets, :files
  end
end
