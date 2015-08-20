class AddFileToWorksheets < ActiveRecord::Migration
  def up
    add_column :worksheets, :file, :string
  end
  def down
    remove_column :worksheets, :file
  end
end
