json.array!(@worksheets) do |worksheet|
  json.extract! worksheet, :id, :klass, :subj, :description
  json.url worksheet_url(worksheet, format: :json)
end
