require 'rails_helper'

RSpec.describe AttachmentsController, type: :controller do
  worksheet =  FactoryGirl.create(:worksheet)
  let(:valid_attributes) do
        {
      file: Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec', 'support', 'files', 'test.odt')),
      worksheet_id: worksheet.id
    }
  end

  it "creates a new Attachment" do
    allow_any_instance_of(Attachment).to receive(:send_content)
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
