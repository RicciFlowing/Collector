require 'rails_helper'

RSpec.describe "Worksheets", type: :request do
  describe "GET /worksheets" do
    it "works! (now write some real specs)" do
      get worksheets_path
      expect(response).to have_http_status(200)
    end
  end
end
