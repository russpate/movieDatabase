var templates = {};

templates.movie = [
  "<article data-id='<%= id %>'>",
    "<div class='review-img'><img src='<%= poster %>'></div>",
    "<div class='review-desc'>",
    "<h3><%= title %></h3>",
    "<p class='review-director'><%= director %></p>",
    "<p class='review-description'><%= desc %></p>",
    "</div>",
    "<div class='review-options'>",
    "<button class='edit faa-float animated-hover'><i class='fa fa-pencil'></i></button>",
    "<button class='delete faa-float animated-hover'><i class='fa fa-times-circle '></i></button>",
    "</div>",
  "</article>"
].join("");

templates.edit = [
  '<form id="edit-review">',
    '<input class="poster" type="text" name="poster" placeholder="poster" value="">',
    '<input class="title" type="text" name="title" placeholder="movie title" value="">',
    '<input class="director" type="text" name="director" placeholder="director" value="">',
    '<input class="desc" placeholder="write a review" name="desc" value="">',
    '<button class="save-edit">save</button>',
  '</form>',
].join("");
