require 'rails_helper'

RSpec.describe Worksheet, type: :model do

  describe "set_content" do
    it "it set the worksheets_content" do
      allow(subject).to receive(:read_text_from_file) { "This is the content"}
      subject.set_content
      expect(subject.content).to eq "This is the content"
    end
  end

end
