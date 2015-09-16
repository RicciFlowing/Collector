class CategoriesController < ApplicationController
  allow_cors :index
  def index
    @categories = Category.all
    render json: @categories,root: false, status: 200
  end

end
