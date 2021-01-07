$(document).ready(function () {
  $(window).scroll(function () {
    // check if scroll event happened
    if ($(document).scrollTop() > 10) {
      // check if user scrolled more than 50 from top of the browser window
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
    $(".navbar-collapse.collapse.show").removeClass("show");
  });
});
