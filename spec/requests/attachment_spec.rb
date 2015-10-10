require 'rails_helper'

RSpec.describe "Attachment", type: :request do
  let(:attachment) { FactoryGirl.create(:attachment) }
  let(:worksheet) { FactoryGirl.create(:worksheet) }
  let(:valid_attributes) { FactoryGirl.attributes_for(:attachment).merge(worksheet_id: worksheet.id)}

  describe "POST /attachments" do
    it "creates a attachment" do
      post '/attachments', {:attachment => valid_attributes }

      expect(response).to have_http_status(204)
    end
  end

  describe "DELETE deletes an attachment" do
    it "deletes a of attachment" do
      delete attachment_path(attachment)
      expect(response).to have_http_status(204)
    end
  end


end
