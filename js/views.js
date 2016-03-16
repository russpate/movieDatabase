
var FormView = Backbone.View.extend({
  collection: null,
  model: null,
  template: _.template(templates.movie),
  events: {
    // listener delegation function
    'click .submit-review' : 'submitNewReview',
    'click .cancel' : 'cancelNewReview',
    // 'click .toCreate':'toReview'
  },
  // toReview:function(event){
  //   console.log("click click click");
  //   this.$el.find('#to-review').removeClass('current');
  //   this.$el.find('#new-review').addClass('current');
  // },
  cancelReview: function(){
    event.preventDefault();
    this.$el.find('#new-review').removeClass('current');
    this.$el.find('#to-review').addClass('current');
  },
  submitNewReview:function(event){
    this.model.set({
      title: this.$el.find('input[name="newTitle"]').val(),
      desc: this.$el.find('input[name="newDesc"]').val(),
      director: this.$el.find('input[name="newDirector"]').val(),
      poster: this.$el.find('input[name="newPoster"]').val()
    });
    this.$el.find('input').val('');
    this.collection.add(this.model);
  },
  initialize: function () {
    if(!this.model) {
      this.model = new MovieModel({});
    }
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});

var MovieView = Backbone.View.extend({
  model: null,
  id:'#movies',
  template: _.template(templates.edit),
  events: {
    // listener delegation function
    'click .delete':'deleteMovie',
    'click .edit':'editMovie',
    'click .save-edit':'saveEdit'
  },
  deleteMovie: function(){
    this.model.destroy();
  },
  saveEdit: function(){
    event.preventDefault();
    this.$el.find('#edit-review').addClass('current');
  },
  editMovie: function(event){
    event.preventDefault();
    this.model.set({
      title: this.$el.find('.poster').val(),
      desc: this.$el.find('.title').val(),
      director: this.$el.find('.director').val(),
      poster: this.$el.find('.desc').val()
    });
  },
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});

var ListView = Backbone.View.extend({
  collection: null,
  el: '#movies',
  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
    this.listenTo(this.collection, 'change', this.addAll);
  },
  addOne: function(el){
    var modelView = new MovieView({model: el});
      console.log("WHAT IS THIS", this);
     console.log("WHAT THE EL", el);
    this.$el.append(modelView.render().el);
  },
  addAll: function(){
    $('#movies').html('');
    _.each(this.collection.model, this.addOne, this);
  }
}); // End of List View
