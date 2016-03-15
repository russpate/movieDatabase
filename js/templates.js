var templates = {};

templates.movie = [
  "<article data-id='<%= movie.id %>'>",
    "<div class='review-img'><img src='<%= movie.poster %>'></div>",
    "<div class='review-desc'>",
    "<h3><%= movie.title %></h3>",
    "<p class='review-director'><%= movie.director %></p>",
    "<p class='review-description'><%= movie.desc %></p>",
    "</div>",
    "<div class='review-options'>",
    "<button class='edit faa-float animated-hover'><i class='fa fa-pencil'></i></button>",
    "<button class='delete faa-float animated-hover'><i class='fa fa-times-circle '></i></button>",
    "</div>",
  "</article>"
].join("");

templates.edit = [
  '<form id="edit-review">',
    '<input type="text" name="poster" placeholder="poster" value="<%= movies.poster %>">',
    '<input type="text" name="title" placeholder="movie title" value="<%= movies.title %>">',
    '<input type="text" name="director" placeholder="director" value="<%= movies.director %>">',
    '<input placeholder="write a review" name="desc" value="<%= movies.desc %>">',
    '<button class="save-edit">save</button>',
  '</form>',
].join("");
