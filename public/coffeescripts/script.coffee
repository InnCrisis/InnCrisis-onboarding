$ ()->
  $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=359a560287da123ae6699e9815d9b9f7&safe_search=1&format=json&tag_mode=all&tags=headshot,face&content_type=1&jsoncallback=?')
    .success (data)->
      $background = $('.background')
      for photo in data.photos.photo
        console.log photo
        $background.append("<img src='http://farm#{photo.farm}.static.flickr.com/#{photo.server}/#{photo.id}_#{photo.secret}_s.jpg'>")

