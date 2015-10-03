FactoryGirl.define do
  factory :worksheet do
   grade 5
   topic "A topic"
   description "A not so long description"
   association :category, factory: :category
   #association :attachment, factory: :attachment
  end

end
