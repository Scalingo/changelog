define(['jquery'], function ($) {

  $(".more").on("click", function(e) {
    e.preventDefault()
    console.log($(this))
    var parent = $(this).closest(".mdl-grid")
    console.log(parent)
    var sibling = parent.next(".mdl-grid")
    sibling.toggleClass("hidden")
  });

})
