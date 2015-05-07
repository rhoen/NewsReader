NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    "feeds/create": "feedCreate",
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
    var feed = this.feeds.getOrFetch(id);
    var feedShowView = new NewsReader.Views.FeedShow({
      model: feed
    });

    this.$el.html(feedShowView.render().$el);
  },

  feedCreate: function () {

    var createView = new NewsReader.Views.FeedCreate({
      collection: this.feeds
    });

    this.$el.html(createView.render().$el);

  }





})
