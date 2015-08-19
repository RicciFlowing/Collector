require 'rails_helper'

RSpec.describe "worksheets/new", type: :view do
  before(:each) do
    assign(:worksheet, Worksheet.new(
      :klass => 1,
      :subj => "MyString",
      :description => "MyText"
    ))
  end

  it "renders new worksheet form" do
    render

    assert_select "form[action=?][method=?]", worksheets_path, "post" do

      assert_select "input#worksheet_klass[name=?]", "worksheet[klass]"

      assert_select "input#worksheet_subj[name=?]", "worksheet[subj]"

      assert_select "textarea#worksheet_description[name=?]", "worksheet[description]"
    end
  end
end
