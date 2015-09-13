class WorksheetsController < ApplicationController

  def index
    @worksheets = Worksheet.all
    render json: @worksheets, status: 200
  end
end
