class WorksheetsController < ApplicationController
  before_action :set_worksheet, only: [:destroy]

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

  def destroy
    @worksheet.destroy
    head :no_content 
  end

  private
    def set_worksheet
      @worksheet = Worksheet.find(params[:id])
    end

    def worksheet_params
      params.require(:worksheet).permit(:topic, :grade, :description, :files, :category_id);
    end


end
