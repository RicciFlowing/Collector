class AddFileToWorksheets < ActiveRecord::Migration
  def change
    change_table :worksheets do |t|
    t.string :file
    end
  end
end
