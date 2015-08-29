class WorksheetsController < ApplicationController
  before_action :set_worksheet, only: [:show, :edit, :update, :destroy]

  def search
    @worksheets = Worksheet.search params[:search]
    if @worksheets.empty?
      flash[:alert] = "The search for #{params[:search]} returned no match. Here are all worksheets."
      redirect_to worksheets_url
    else
      render :index
    end
  end

  # GET /worksheets
  # GET /worksheets.json
  def index
    @worksheets = Worksheet.all
    respond_to do |format|
       format.json { render json: @worksheets.as_json(include: [:category]) }
    end
  end

  # GET /worksheets/1
  # GET /worksheets/1.json
  def show
  end

  # GET /worksheets/new
  def new
    @worksheet = Worksheet.new
  end

  # GET /worksheets/1/edit
  def edit
  end

  # POST /worksheets
  # POST /worksheets.json
  def create
    @worksheet = Worksheet.new(worksheet_params)
    if worksheet_params[:file]
      @worksheet.set_content
    end
    respond_to do |format|
      if @worksheet.save
        format.html { redirect_to @worksheet, notice: 'Worksheet was successfully created.' }
        format.json { render :show, status: :created, location: @worksheet }
      else
        format.html { render :new }
        format.json { render json: @worksheet.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /worksheets/1
  # PATCH/PUT /worksheets/1.json
  def update
    respond_to do |format|
      if @worksheet.update(worksheet_params)
        format.html { redirect_to @worksheet, notice: 'Worksheet was successfully updated.' }
        format.json { render :show, status: :ok, location: @worksheet }
      else
        format.html { render :edit }
        format.json { render json: @worksheet.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /worksheets/1
  # DELETE /worksheets/1.json
  def destroy
    @worksheet.destroy
    respond_to do |format|
      format.html { redirect_to worksheets_url, notice: 'Worksheet was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_worksheet
      @worksheet = Worksheet.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def worksheet_params
      params.require(:worksheet).permit(:klass, :description, :file, :category_id)
    end
end
