class AddSchoolSubjectRefToCategory < ActiveRecord::Migration
  def change
    add_reference :categories, :schoolsubject, index: true
    add_foreign_key :categories, :schoolsubjects
  end
end
