require 'rails_helper'

RSpec.describe "Worksheets", type: :request do

  before(:all) do
    2.times { FactoryGirl.create(:worksheet)}
  end

  describe "GET /worksheets" do
    it "returns a list of worksheets" do
      get worksheets_path
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json")

      parsed_body = JSON.parse(response.body)

      expect(parsed_body['worksheets']).not_to be_empty
    end

    it "return a list of worksheets with the properties id, topic, grade, description, file, category" do
      get worksheets_path
      parsed_body = JSON.parse(response.body)

      expect(parsed_body['worksheets'].first).to include('id', 'grade','topic', 'file', 'category' )
    end


  end
end
