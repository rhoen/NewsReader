NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "" : "feedIndex"

  },

  feedIndex: function () {
    var feedIndexView = new NewsReader.Views.FeedIndex();
  }






})
