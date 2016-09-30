json.partial! 'api/guests/guest'

json.gifts do
  json.array! @guest.gifts, :title, :description
end
