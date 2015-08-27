require 'rails_helper'

RSpec.describe Schoolsubject, type: :model do
  it {should have_many :categories}
end
