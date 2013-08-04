$(document).ready(function() {
  
  resizeHeader();
  scrollToId();

  $( ".play-video" ).click(function() {
    playHeadVideo ();
    return false;
  });

});

// ---------------------

function resizeHeader () {

  var header = $('header');
  var windowHeight = $(window).height();

  var headerHeight = ( windowHeight - 66 )

  header.height(headerHeight)
  header.backstretch(["images/header-bg.jpg"], {centeredY: false, fade:1200});

};

// ---------------------

function playHeadVideo () {
  $('.video-promo,.backstretch img').fadeOut(500);
};

// ---------------------

function scrollToId () {

  $('a[href*=#]:not([href=#])').click(function() {
    if (
      location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname
    ) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });

};

// ---------------------