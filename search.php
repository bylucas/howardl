<?php
/**
 * The template for displaying search results pages
 *
 * @package howardlucas
 */

get_header();
?>

  <main id="main" class="main">

    <?php if ( have_posts() ) : ?>

      <header class="page-header">
        <h1>
          <?php
          /* translators: %s: search query. */
          printf( esc_html__( 'Results for: %s', 'howardlucas' ), '<span>' . get_search_query() . '</span>' );
          ?>
        </h1>
      </header><!-- .page-header -->
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

<?php get_footer();
