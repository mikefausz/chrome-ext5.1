$(document).ready(function() {
  gifGen.init();
});

var gifGen = {
  url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',

  init: function() {
    gifGen.events();
    gifGen.styling();
  },

  styling: function() {
    gifGen.getGiphyData();
  },

  events: function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      gifGen.getGiphyData($('input').val());
      gifGen.url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    });
  },

  getGiphyData: function(tags) {
    if(tags) {
      gifGen.url += "&tag=" + tags.replace(/\s/g,'+').trim();
    }
    $.ajax({
      method: 'GET',
      url: gifGen.url,
      success: function(gifObj) {
        gifGen.addGifToDom(gifObj.data.image_url, $('#gif'));
      }
    });
  },

  addGifToDom: function(gifUrl, $target) {
    $target.attr("src", gifUrl);
  },
};
