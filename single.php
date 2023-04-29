<?php
/**
 * The template for displaying all single posts
 *
 * @package howardlucas
 */

get_header();
?>

  <main id="main" class="main">

    <?php
    while ( have_posts() ) :
      the_post();

      get_template_part( 'formats/content', get_post_format() );

      howardlucas_related_posts();

      // If comments are open or we have at least one comment, load up the comment template.
      if ( comments_open() || get_comments_number() ) :
        comments_template();
      endif;

    endwhile; // End of the loop.
    ?>
  
  </main><!-- #main -->

<?php get_footer();