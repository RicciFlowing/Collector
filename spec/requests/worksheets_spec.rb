require 'rails_helper'

RSpec.describe "Worksheets", type: :request do
  category =  FactoryGirl.create(:category)
  let(:valid_attributes){ FactoryGirl.attributes_for(:worksheet).merge({category_id: category.id}) }

  before(:all) do
    2.times { FactoryGirl.create(:worksheet)}
  end

  describe "GET /worksheets" do
    it "returns a list of worksheets" do
      get worksheets_path
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json")

      parsed_body = JSON.parse(response.body)

      expect(parsed_body).not_to be_empty
    end

    it "return a list of worksheets with the properties id, topic, grade, description, files, category" do
      get worksheets_path
      parsed_body = JSON.parse(response.body)

      expect(parsed_body.first).to include('id', 'grade','topic', 'files', 'category' )
    end
  end

  describe "POST /worksheets" do
    it "creates a of worksheets" do
      post worksheets_path, {:worksheet =>valid_attributes }
      expect(response).to have_http_status(200)
    end

  end


end
