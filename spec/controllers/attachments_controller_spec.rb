require 'rails_helper'

RSpec.describe AttachmentsController, type: :controller do
  worksheet =  FactoryGirl.create(:worksheet)
  let(:valid_attributes){ FactoryGirl.attributes_for(:attachment).merge({worksheet_id: worksheet.id}) }

  it "creates a new Attachment" do
    expect {
      post :create, {:attachment => valid_attributes}
    }.to change(Attachment, :count).by(1)
  end

  it "deletes a Attachment" do
    attachment = FactoryGirl.create(:attachment)
    expect {
      post :destroy, {:id => attachment.id}
    }.to change(Attachment, :count).by(-1)
  end
end
