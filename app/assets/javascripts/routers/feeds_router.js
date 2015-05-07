NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    "feeds/create": "feedCreate",
    "feeds/:id": "feedShow",
    "sessions/login": "logIn"
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

    this.swapViews(feedsIndexView);
  },

  feedShow: function (id) {
    var feed = this.feeds.getOrFetch(id);
    var feedShowView = new NewsReader.Views.FeedShow({
      model: feed
    });

    this.swapViews(feedShowView);
  },

  swapViews: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$el.html(this._currentView.render().$el)
  },

  feedCreate: function () {
    var createView = new NewsReader.Views.FeedCreate({
      collection: this.feeds
    });

    this.swapViews(createView);
  },

  logIn: function () {
    var view = new NewsReader.Views.LogIn();
    this.$el.html(view.render().$el);
  }

})
