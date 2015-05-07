NewsReader.Views.LogIn = Backbone.View.extend({
  template: JST['sessions/logIn'],

  events: {
    "submit form":"logIn"
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  },

  logIn: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    var session = new NewsReader.Models.Session(formData);

    session.save({}, {
      success: function (response) {
        // user logged in
        NewsReader._currentUser = new NewsReader.Models.User(response);
      }
    })
  }
})
