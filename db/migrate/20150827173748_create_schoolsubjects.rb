class CreateSchoolsubjects < ActiveRecord::Migration
  def change
    create_table :schoolsubjects do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
