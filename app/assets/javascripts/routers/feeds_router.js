NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    "feeds/:id": "feedShow"

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
  },

  feedShow: function (id) {
    alert(id);
  }





})
