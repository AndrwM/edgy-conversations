<?php get_header(); ?>

<!-- Header -->
<header>

  <!-- Top -->
  <div class="top">
    <h1>
      <a href="/"><img src="<?php bloginfo('template_url'); ?>/images/waldlogo-sm.png">EDGY Conversations</a>
      How Ordinary People Achieve Outrageous Success
    </h1>
    <nav>
      <a href="#book">About The Book</a>
      <a href="#author">Author</a>
      <a href="#order" class="promo">Pre-Order</a>
  </div>

  <!-- Video Area -->
  <div class="video-promo">
    <h2>Everything you think you know about success is <span>wrong</span></h2>
    <a href="#" class="play-video">Play<img src="<?php bloginfo('template_url'); ?>/images/playbtn.png">Video</a>
  </div>

</header>

<section class="signup">
  <form class="wrapper">
    <input class="required" type="text" value="" placeholder="First Name">
    <input class="required" type="text" value="" placeholder="Email Address">
    <a href="#" class="submit btn">Add me to the Waiting List</a>
  </form>
</section>

<!-- About The Book -->
<section class="book" id="book">
  <div class="wrapper">

    <?php echo do_shortcode("[contentblock id=book]"); ?>

    <img src="<?php bloginfo('template_url'); ?>/images/bookmock1.jpg" class="bookmock">

    <div class="diver"><?php echo do_shortcode("[contentblock id=diver]"); ?></div>

  </div>
</section>

<!-- About The Author -->
<section class="author" id="author">
  <div class="wrapper">

    <?php echo do_shortcode("[contentblock id=author-bio]"); ?>

    <img src="<?php bloginfo('template_url'); ?>/images/dan.png" class="dan">

  </div>
</section>

<!-- Order -->
<section class="order" id="order">
  <div class="wrapper">

    <h1>Pre-order Edgy Conversations</h1>
    <h2>Be the first to get this life changing book!</h2>

    <form>
      <input class="required" type="text" value="" placeholder="First Name">
      <input class="required" type="text" value="" placeholder="Email Address">
      <a href="#" class="submit btn">Add me to the Waiting List</a>
      <span>Book pre-orders begin July 30th</span>
    </form>

    <img src="<?php bloginfo('template_url'); ?>/images/bookmock2.jpg" class="bookmock">
  </div>
</section>

<!-- Foooooooooooter -->
<footer>
  <div class="wrapper">
    Copyright Waldschmidt Partners 2013, All Rights Reserved.
  </div>
</footer>

<?php get_footer(); ?>