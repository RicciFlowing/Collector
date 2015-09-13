require "rails_helper"

RSpec.describe WorksheetsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/worksheets").to route_to("worksheets#index")
    end

    it "routes to #edit" do
      expect(:get => "/worksheets/1/edit").to route_to("worksheets#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/worksheets").to route_to("worksheets#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/worksheets/1").to route_to("worksheets#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/worksheets/1").to route_to("worksheets#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/worksheets/1").to route_to("worksheets#destroy", :id => "1")
    end

  end
end
