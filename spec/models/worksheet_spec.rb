require 'rails_helper'

RSpec.describe Worksheet, type: :model do
  let(:worksheet) { FactoryGirl.create(:worksheet) }

  describe 'add_content' do
    it 'add the text to its content' do
      worksheet.content = ''
      worksheet.add_content("text")
      expect(worksheet.content).to eq 'text'
    end
  end
end
