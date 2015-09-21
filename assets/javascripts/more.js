define(['jquery'], function ($) {

  $(".more").on("click", function(e) {
    e.preventDefault()
    console.log($(this))
    var parent = $(this).closest(".row")
    console.log(parent)
    var sibling = parent.next(".row")
    sibling.toggleClass("hidden")
  });

})
