class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories,root: false, status: 200
  end
end
