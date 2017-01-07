// check off todo List by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click X to fade out then remove a Todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// grab a Todo Text from input
$("input").keypress(function(event){
  // Enter(13) hit by user
  if (event.which === 13) {
    var newTodo = $(this).val();
    // clear out input, it acts as a setter rather than a getter
    $(this).val("");
    // append newTodo to ul
    $("ul").append("<li><span>X</span> " + newTodo + "</li>");
  }
});