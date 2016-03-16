$(document).ready(function () {
  var movieCollection = new MovieCollection(movies);
  new ListView({collection:movieCollection});
  var formMarkup = new FormView({collection: movieCollection});

  $('#to-review').on('click', '.toCreate', function(){
    console.log("toReview");
    $('#edit-review').addClass('current');
  });
  // $('.col-md-4').html(formMarkup.render().el);
});
