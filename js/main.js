/** @format */

$(document).ready(function () {
  // Collapsible initialization
  $(".collapsible").collapsible();

  // sidenav initialization
  $(".sidenav").sidenav();

  // scrollspy initialization
  $(".scrollspy").scrollSpy();

  // Loading screen
  $(window).on("load", function () {
    "use strict";
    $(".background").fadeOut(1000);
    $(".share").fadeIn(1000);
  });

  // Scroll Button

  var scrollButton = $("#scroll-top");

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
      scrollButton.fadeIn();
    } else {
      scrollButton.fadeOut();
    }
  });

  // Click On Button To Scroll Top

  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
  });
});
