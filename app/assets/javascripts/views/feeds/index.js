NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],

  render: function () {
    console.log("renders!");
    this.$el.html(this.template({feeds: this.collection}));
    return this;
  },

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  }
})
