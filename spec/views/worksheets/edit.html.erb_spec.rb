require 'rails_helper'

RSpec.describe "worksheets/edit", type: :view do
  before(:each) do
    @worksheet = assign(:worksheet, Worksheet.create!(
      :klass => 1,
      :subj => "MyString",
      :description => "MyText"
    ))
  end

  it "renders the edit worksheet form" do
    render

    assert_select "form[action=?][method=?]", worksheet_path(@worksheet), "post" do

      assert_select "input#worksheet_klass[name=?]", "worksheet[klass]"

      assert_select "input#worksheet_subj[name=?]", "worksheet[subj]"

      assert_select "textarea#worksheet_description[name=?]", "worksheet[description]"
    end
  end
end
