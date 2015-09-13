class WorksheetsController < ApplicationController

  def index
    @worksheets = Worksheet.all
    render json: @worksheets, status: 200
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
      params.require(:worksheet).permit(:topic, :grade, :description, :file, :category_id);
    end
end
