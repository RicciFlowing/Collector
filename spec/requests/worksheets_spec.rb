require 'rails_helper'

RSpec.describe "Worksheets", type: :request do
  describe "GET /worksheets" do
    it "returns a list of worksheets" do
      get worksheets_path
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json")
    end
  end
end
