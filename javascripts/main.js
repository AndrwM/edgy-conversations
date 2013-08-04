$(document).ready(function() {
  
  resizeHeader();

});

function resizeHeader () {

  var windowHeight = $(window).height();
  var headerHeight = ( windowHeight - 88 )

  $('header').height(headerHeight);

};