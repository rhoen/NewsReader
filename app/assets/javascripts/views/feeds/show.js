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

  remove: function () {
    this._subViews.forEach(function(subView) {
      subView.remove();
    })

    this.$el.remove();
    this.stopListening();
    return this;
  },

  render: function () {
    this.$el.html(this.template({
      feed: this.model
    }))
    this._subViews = [];
    this.model.entries().forEach(function(entry) {
      var subView = new NewsReader.Views.EntryShow({model: entry});
      this._subViews.push(subView);
      this.$("ul").prepend(subView.render().$el);
    }.bind(this));

    return this;
  }
})
