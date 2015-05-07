window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var feeds = new NewsReader.Collections.Feeds();
    new NewsReader.Routers.FeedsRouter({
      $el: $('#content'),
      feeds: feeds
    });
    Backbone.history.start();
    console.log('backbone loaded');
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
