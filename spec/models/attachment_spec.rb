require 'rails_helper'

RSpec.describe Attachment, type: :model do
  describe "get_content" do
    let(:attachment) { FactoryGirl.create(:attachment) }
    it "it returns the content" do
      allow(attachment).to receive(:read_text) { "This is the content"}

      expect(attachment.get_content).to eq "This is the content"
    end
  end
end
