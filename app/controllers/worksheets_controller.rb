class WorksheetsController < ApplicationController
  allow_cors :index, :create
  def index
    @worksheets = Worksheet.all
    render  json: @worksheets, root: false, status: 200
  end

  def create
    @worksheet = Worksheet.new(worksheet_params);
    if @worksheet.save
      render json: @worksheets, status: 200
    else
      render json: @worksheets, status: 400
    end
  end

  private
    def worksheet_params
      params.require(:worksheet).permit(:topic, :grade, :description, :files, :category_id);
    end


end
