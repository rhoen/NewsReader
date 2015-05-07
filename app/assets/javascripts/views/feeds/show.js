NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feeds/show"],

  events: {
    "click button.refresh" : "refresh"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  refresh: function () {
    this.model.fetch();
  },

  render: function () {
    this.$el.html(this.template({
      feed: this.model
    }))

    return this;
  }
})
