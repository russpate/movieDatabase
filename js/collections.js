var MovieCollection = Backbone.Collection.extend({
  model: MovieModel,
  initialize: function (options) {
      console.log(options);
  }
});
