require 'rails_helper'

RSpec.describe "Category", type: :request do

  before(:all) do
    2.times { FactoryGirl.create(:category)}
  end

  describe "GET /categories" do
    it "returns a list of categories" do
      get categories_path
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json")

      parsed_body = JSON.parse(response.body)

      expect(parsed_body).not_to be_empty
    end

    it "return a list of categories with the properties id, name, subject" do
      get categories_path
      parsed_body = JSON.parse(response.body)

      expect(parsed_body.first).to include('id','name', 'subject' )
    end
  end



end
