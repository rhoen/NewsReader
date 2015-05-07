NewsReader.Views.FeedCreate = Backbone.View.extend({
  template: JST['feeds/create'],

  events: {
    "submit form":"create"
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  },

  create: function (event) {
    event.preventDefault();

    var feed = new NewsReader.Models.Feed();

    feed.save($(event.currentTarget).serializeJSON(), {
      success: function(){
        this.collection.add(feed);
        Backbone.history.navigate("", { trigger: true })
      }.bind(this)
    })
  }
})
