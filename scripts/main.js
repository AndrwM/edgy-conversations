$(document).ready(function() {

  resizeHeader();
  scrollToId();
  sectionAnimation();

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
};

// ---------------------

function playHeadVideo () {

  $('header').addClass('video-play')
  $('header .video-promo').removeClass('show')

  wistiaEmbed = Wistia.embed("28xbs18fh2", {
    playerColor: "000000",
    autoPlay: true,
    fullscreenButton: false,
    playbar: false,
    volumeControl: false,
    smallPlayButton: false,
    container: "videoContainer",
  });

  wistiaEmbed.bind("end", function () {
    unloadVideo();
  });

  $('nav a').one('click', function() {
    unloadVideo();
  });

  function unloadVideo () {
    wistiaEmbed.remove();
    $('header').removeClass('video-play')
    $('header .video-promo').addClass('show')
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

function sectionAnimation () {

  $('header .video-promo').delay(100).addClass('show');

  $.fn.waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    horizontal: false,
    offset: '60%',
    triggerOnce: false
  }

  $(book).waypoint(function() {
    $(book).addClass('trigger-animate')
  });

  $('#book .diver').waypoint(function() {
    $('.diver').addClass('trigger-animate')
  }, { offset: '95%' } );

  $(author).waypoint(function() {
    $(author).addClass('trigger-animate')
  });

  $(order).waypoint(function() {
    $(order).addClass('trigger-animate')
  });

  $('header').waypoint(function() {
    $('.trigger-animate').removeClass('trigger-animate')
  }, { offset: 0 } );

}