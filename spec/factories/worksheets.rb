FactoryGirl.define do
  factory :worksheet do
    klass 1
   description "MyText"
   file "MyString"
   association :category, factory: :category
   association :schoolsubject
  end

end
