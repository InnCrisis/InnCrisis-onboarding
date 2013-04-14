
  $(function() {
    return $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd2a2383ffb59e68d334de2a0552fda4&safe_search=1&format=json&tag_mode=all&tags=headshot,face&content_type=1&per_page=52&jsoncallback=?').success(function(data) {
      var $background, photo, _i, _len, _ref, _results;
      $background = $('.background');
      _ref = data.photos.photo;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        photo = _ref[_i];
        console.log(photo);
        _results.push($background.append("<img src='http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg'>"));
      }
      return _results;
    });
  });
