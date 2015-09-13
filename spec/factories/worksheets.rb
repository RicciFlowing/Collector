FactoryGirl.define do
  factory :worksheet do
   grade 1
   topic "A topic"
   description "A not so long description"
   file { Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec', 'support', 'files', 'test.odt')) }
   association :category, factory: :category
  end

end
