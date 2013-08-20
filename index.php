<?php get_header(); ?>

<!-- Header -->
<header>

  <!-- Top -->
  <div class="top">
    <div class="wrapper">
      <h1>
        <a href="/"><img src="<?php bloginfo('template_url'); ?>/images/waldlogo-sm.png">EDGY Conversations</a>
        How Ordinary People Achieve Outrageous Success
      </h1>
      <nav>
        <a href="#book">About The Book</a>
        <a href="#author">Author</a>
        <a href="#order" class="promo">Sign Me Up</a>
      </nav>
    </div>
  </div>

  <!-- Video Area -->
  <div class="video-promo">
    <h2>Everything you think you know about success is <span>wrong</span></h2>
    <a href="#" class="play-video">Play<img src="<?php bloginfo('template_url'); ?>/images/playbtn.png">Video</a>
  </div>

  <div class="video-container" id="videoContainer">&nbsp;</div>

</header>

<section class="signup">
  <form accept-charset="UTF-8" name="form1" action="https://bd137.infusionsoft.com/app/form/process/6193b3f4eb16d94dfef56ce14ce05340" class="infusion-form wrapper" method="POST">
    <input name="inf_form_xid" type="hidden" value="6193b3f4eb16d94dfef56ce14ce05340" />
    <input name="inf_form_name" type="hidden" value="Tell me when I&#a;can get Dan's book" />
    <input name="infusionsoft_version" type="hidden" value="1.29.4.53" />  
    <input class="infusion-field-input-container" id="inf_field_FirstName" name="inf_field_FirstName" type="text"value="" placeholder="First Name" />
    <input class="infusion-field-input-container" id="inf_field_Email" name="inf_field_Email" type="text" value="" placeholder="Email Address" />
    <a href="javascript: document.form1.submit();" class="submit btn" >Sign Me Up</a>
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

    <h1>Notify Me When I Can Pre-Order</h1>
    <h2>Be the first to get this life changing book!</h2>

    <form accept-charset="UTF-8" name="form2" action="https://bd137.infusionsoft.com/app/form/process/6193b3f4eb16d94dfef56ce14ce05340" class="infusion-form" method="POST">
      <input name="inf_form_xid" type="hidden" value="6193b3f4eb16d94dfef56ce14ce05340" />
      <input name="inf_form_name" type="hidden" value="Tell me when I&#a;can get Dan's book" />
      <input name="infusionsoft_version" type="hidden" value="1.29.4.53" />  
      <input class="infusion-field-input-container" id="inf_field_FirstName" name="inf_field_FirstName" type="text"value="" placeholder="First Name" />
      <input class="infusion-field-input-container" id="inf_field_Email" name="inf_field_Email" type="text" value="" placeholder="Email Address" />
      <a href="javascript: document.form2.submit();" class="submit btn" >Sign Me Up</a>
      <span>Book pre-orders begin July 30th</span>
    </form>

    <img src="<?php bloginfo('template_url'); ?>/images/bookmock2.jpg" class="bookmock">
  </div>
</section>

<!-- Foooooooooooter -->
<footer>
  <div class="wrapper">
    Copyright Waldschmidt Partners <?php echo date("Y"); ?>, All Rights Reserved.
  </div>
</footer>

<?php get_footer(); ?>