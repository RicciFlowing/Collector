require 'rails_helper'

RSpec.describe "worksheets/index", type: :view do
  before(:each) do
    assign(:worksheets, [
      Worksheet.create!(
        :klass => 1,
        :subj => "Subj",
        :description => "MyText"
      ),
      Worksheet.create!(
        :klass => 1,
        :subj => "Subj",
        :description => "MyText"
      )
    ])
  end

  it "renders a list of worksheets" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Subj".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
