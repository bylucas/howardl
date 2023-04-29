<?php
/**
 * The template for displaying archive pages
 *
 * @package howardlucas
 */

get_header();
?>

  <main id="main" class="main">

    <?php if ( have_posts() ) : ?>

      <header class="archive-header">
        <?php
        the_archive_title( '<h1>', '</h1>' );
        ?>
      </header><!-- .archive-header -->
<div class="card-wrap">
      <?php
      /* Start the Loop */
      while ( have_posts() ) :
        the_post();

        get_template_part( 'formats/content', 'index' );

      endwhile; ?>
</div>
    <?php

    else :

      get_template_part( 'formats/content', 'none' );

    endif;
    ?>
  </main><!-- #main -->

<?php
get_footer();
