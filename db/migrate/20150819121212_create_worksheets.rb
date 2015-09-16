class CreateWorksheets < ActiveRecord::Migration
  def change
    create_table :worksheets do |t|
      t.string :topic
      t.integer :grade
      t.text :description
      t.string :files
      t.text :content

      t.timestamps null: false
    end

  end
end
