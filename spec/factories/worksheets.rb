FactoryGirl.define do
  factory :worksheet do
    klass 1
    subj "MyString"
   description "MyText"
   file "MyString"
   association :category, factory: :category
  end

end
