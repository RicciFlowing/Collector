class AddCategoryToWorksheets < ActiveRecord::Migration
  def up
    add_reference :worksheets, :category, index: true, foreign_key: true
  end

  def down
   remove_reference :worksheets, :category
  end
end
