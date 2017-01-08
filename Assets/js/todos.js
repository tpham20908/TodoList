// check off todo List by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click X to fade out then remove a Todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// grab a Todo Text from input
$("input").keypress(function(event){
  // Enter(13) hit by user and input is not empty
  if (event.which === 13 && $(this).val() !== "") {
    var newTodo = $(this).val();

    // if new Todo is duplicated?
    $("li").each(function() {
      if (newTodo.toLowerCase() === $(this).text().toLowerCase().trim()) {
        alert("This todo has already existed!");
      }
    });



    // clear out input, it acts as a setter rather than a getter
    $(this).val("");
    // append newTodo to ul
    $("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> " + newTodo + "</li>");
  }
});

// toggle input when pencil icon clicked
$(".fa-pencil").click(function() {
  $("input").fadeToggle();
});