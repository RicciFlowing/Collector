FactoryGirl.define do
  factory :worksheet do
   grade 1
   topic "A topic"
   description "A not so long description"
   file "/not/a/file"
   association :category, factory: :category
  end

end
