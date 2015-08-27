class CreateWorksheets < ActiveRecord::Migration
  def change
    create_table :worksheets do |t|
      t.integer :klass
      t.text :description

      t.timestamps null: false
    end

  end
end
