$(document).ready(function() {
  
  resizeHeader();

});

function resizeHeader () {

  var header = $('header');
  var windowHeight = $(window).height();

  var headerHeight = ( windowHeight - 88 )

  header.height(headerHeight)
  header.backstretch(["images/header-bg.jpg"], {centeredY: false, fade:1200});

};