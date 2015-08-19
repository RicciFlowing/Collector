require 'rails_helper'

RSpec.describe "worksheets/show", type: :view do
  before(:each) do
    @worksheet = assign(:worksheet, Worksheet.create!(
      :klass => 1,
      :subj => "Subj",
      :description => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(/Subj/)
    expect(rendered).to match(/MyText/)
  end
end
