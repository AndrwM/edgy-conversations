$(document).ready(function() {

  resizeHeader();
  scrollToId();

  $( ".play-video" ).click(function() {
    playHeadVideo ();
    return false;
  });

  // wistiaEmbed = Wistia.embed("28xbs18fh2", {
  //   playerColor: "cc0504",
  //   videoFoam: true,
  //   autoPlay: true,
  //   fullscreenButton: false,
  //   container: "promo-video-containe"
  // });

});

// ---------------------

function resizeHeader () {

  var header = $('header');
  var windowHeight = $(window).height();

  var headerHeight = ( windowHeight - 66 )

  header.height(headerHeight)
};

// ---------------------

function playHeadVideo () {

  $('header').addClass('video-play')

  wistiaEmbed = Wistia.embed("28xbs18fh2", {
    playerColor: "000000",
    autoPlay: true,
    fullscreenButton: false,
    container: "videoContainer",
  });

  wistiaEmbed.bind("end", function () {
    unload();
  });

  $('nav a').one('click', function() {
    unload();
  });

  function unload () {
    wistiaEmbed.remove();
    $('header').removeClass('video-play')
  }

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