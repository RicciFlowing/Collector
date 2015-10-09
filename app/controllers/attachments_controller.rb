class AttachmentsController < ApplicationController
  before_action :set_attachment, only: :destroy
  def create
    @attachment = Attachment.new(attachment_params);
    if @attachment.save
      @attachment.send_content
      head :no_content
    else
      render status: 400, json: nil
    end
  end

  def destroy
    @attachment.destroy
    head :no_content
  end

  private
    def attachment_params
      params.require(:attachment).permit(:topic, :grade, :description, :files, :category_id);
    end

    def set_attachment
      @attachment = Attachment.find(params[:id])
    end
end
