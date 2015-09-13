require 'rails_helper'

RSpec.describe WorksheetsController, type: :controller do
  category =  FactoryGirl.create(:category)
  let(:valid_attributes){ FactoryGirl.attributes_for(:worksheet).merge({category_id: category.id}) }


  it "creates a new Worksheet" do
    expect {
      post :create, {:worksheet => valid_attributes}
    }.to change(Worksheet, :count).by(1)
  end
end
