$(document).ready(function() {
  page.init();
  // $('#new-review').html(templates.toReview);
});

var movieCollection = new MovieCollection(movies);

var page = {

  init:function () {
    page.events();
    page.styling();
    page.addAll();
  },

  movieTmpl: _.template(templates.movie),
  // reviewTmpl: _.template(templates.review),

  styling: function () {

  },

  events: function () {
    $('#movies').on('click', '.delete', page.deleteMovie);
    $('#movies').on('click', '.edit', page.editMovie);
    $('#movies').on('click', '.save-edit', page.saveEdit);
    $('.container').on('click', '.toCreate', page.toReview);
    $('#new-review').on('click', '.submit-review', page.submitNewReview);
  },

  deleteMovie: function(event){
    console.log("CLICKCKCKCKCKCKCKC")
    event.preventDefault();
    var movieId = $(this).closest('article').data('id');
    movieCollection.remove(movieId);
    page.addAll();
  },

  editMovie: function(event){
    console.log("CLICKCKCKCKCKCKCKC")
    event.preventDefault();
    var editTmpl = _.template(templates.edit);
    var title = $(this).closest('article').find('h3').text();
    var desc = $(this).closest('article').find('.review-description').text();
    var director = $(this).closest('article').find('.review-director').text();
    var poster = $(this).closest('article').find('img').prop('src');
    var editObj = {
      title: title,
      desc: desc,
      director: director,
      poster: poster
    }
    $(this).closest('article').html(editTmpl({movies: editObj}))
  },

  saveEdit: function(event){
    console.log("you selected this")
    event.preventDefault();
    var editedMovie = {
      title: $('#movies input[name="title"]').val(),
      desc: $('#movies input[name="desc"]').val(),
      director: $('#movies input[name="director"]').val(),
      poster: $('#movies input[name="poster"]').val()
    };
    var saveEditedMovie = new MovieModel(editedMovie);
    var movieId = $(this).closest('article').data('id');
    movieCollection.get(movieId).set(editedMovie);
    page.addAll();
  },

  toReview: function(event){
    console.log("new review clicked", $(this));
    event.preventDefault();
    // var markup = page.reviewTmpl(templates.review)
    // $('#new-review').html(markup);
    $('#to-review').removeClass('current');
    $('#new-review').addClass('current');
  },

  submitNewReview: function(event){
    console.log("you clicked submit review");
    event.preventDefault();

    var newMovieObj = {
      title: $('input[name="newTitle"]').val(),
      desc: $('input[name="newDesc"]').val(),
      director: $('input[name="newDirector"]').val(),
      poster: $('input[name="newPoster"]').val()
    };
    var saveNewMovie = new MovieModel(newMovieObj);
    var movieId = $(this).closest('article').data('id');
    movieCollection.add(newMovieObj);
    page.addAll();

    $('#new-review').removeClass('current');
    $('#to-review').addClass('current');
  },

  addOne: function(el){
    el.attributes.id = el.cid;
    var markup = page.movieTmpl({movie: el.toJSON()});
    $('#movies').prepend(markup);
  },

  addAll: function(){
    $('#movies').html('');
    _.each(movieCollection.models, page.addOne);
  }
}; // end of page
