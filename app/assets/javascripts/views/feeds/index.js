NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],

  render: function () {
    console.log("renders!");
    this.$el.html(this.template({feeds: this.collection}));
    return this;
  },

  events: {
    "click button.delete" : "destroy"
  },

  initialize: function () {
    this.listenTo(this.collection, "sync remove", this.render);
  },

  destroy: function (event) {
    var feedId = $(event.currentTarget).data('feed-id');
    var model = this.collection.get(feedId);
    model.destroy();
  }

})
