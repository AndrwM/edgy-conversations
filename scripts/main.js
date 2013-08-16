$(document).ready(function() {

  resizeHeader();
  scrollToId();
  sectionAnimation();

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
    unloadVideo();
  });

  $('nav a').one('click', function() {
    unloadVideo();
  });

  function unloadVideo () {
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

function sectionAnimation () {

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
  }, { offset: '95%' }
  );

  $(author).waypoint(function() {
    $(author).addClass('trigger-animate')
  });

  $(order).waypoint(function() {
    $(order).addClass('trigger-animate')
  });

  $('header').waypoint(function() {
    $('.trigger-animate').removeClass('trigger-animate')
  }, { offset: 0 }
  );

}

// ---------------------

// // function nearEl (el) {

// //   var threshold = 500;
// //   var inView = $(document).scrollTop() + $(window).height()
// //   var elTop = el.offset().top;
// //   var elHeight = el.height();

// //   if ( inView > elTop ) {
// //     console.log('above')
// //   }

// // }

// function inView (el) {

//   var viewportHeight = $(window).height();
//   var scrollTop = $(document).scrollTop();
//   var elTop = el.offset().top;
//   var elHeight = el.height();

//   var nearThreshold = 500;


//   // If the amount scrolled + browser height + 100 > distance from top of page + height
//   if ( (scrollTop + viewportHeight + nearThreshold) > (elTop + elHeight) ) {
//     // console.log('scrollTop',scrollTop,'+ viewportHeight', viewportHeight, '+ nearThreshold', nearThreshold)
//     return true;
//     console.log('yep')
//   } else if ( (scrollTop + viewportHeight + nearThreshold) < (elTop + elHeight) ) {
//     console.log('------not')
//   }
  
// };

// // ---------------------

// function animate () {
//   console.log('animate')
// }