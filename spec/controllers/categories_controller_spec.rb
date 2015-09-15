require 'rails_helper'

RSpec.describe CategoriesController, type: :controller do

  it "list all Categories" do
      get :index
      expect(assigns(@categories))
  end
end
