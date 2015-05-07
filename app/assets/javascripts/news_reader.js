window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.FeedsRouter();
    Backbone.history.start();
    console.log('backbone loaded');
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
