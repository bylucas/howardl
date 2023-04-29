<?php
/**
 * The template for displaying default pages
 *
 *
 * @package howardlucas
 */

get_header(); ?>

<main id="main" class="main">

    <?php
    while ( have_posts() ) :
      the_post();

      get_template_part( 'formats/content', 'page' );

    endwhile; // End of the loop.
    ?>
  </main><!-- #main -->

<?php
get_footer();
