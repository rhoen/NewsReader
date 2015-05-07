NewsReader.Models.Session = Backbone.Model.extend({
  urlRoot: '/api/sessions',

  initialize: function (options) {

    this.username = options.username;
    this.password = options.password;
  }
});
