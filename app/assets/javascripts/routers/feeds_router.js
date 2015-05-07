NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex"

  },

  initialize: function (options) {
    this.$el = options.$el;
    this.feeds = options.feeds;
  },

  feedsIndex: function () {
    this.feeds.fetch();
    var feedsIndexView = new NewsReader.Views.FeedsIndex({
      collection: this.feeds
    });
    this.$el.html(feedsIndexView.render().$el)
  }






})
