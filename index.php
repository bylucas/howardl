<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage howardlucas
 * @since howardlucas 1.0
 */

get_header(); ?>

<main id="main" class="main">
    
  <?php if ( have_posts() ) :

      if ( is_home() && ! is_front_page() ) :
        ?>
        <header>
          <h1 class="screen-reader-text"><?php single_post_title(); ?></h1>
        </header>
        <?php
      endif; ?>
<div class="card-wrap">
  
 <?php // Load posts loop.
  while ( have_posts() ) :
    the_post();

  get_template_part( 'formats/content', 'index' );

  endwhile; ?>
</div>

<?php

 else :

  // If no content, include the "No posts found" template.
  //get_template_part( 'template-parts/content/content-none' );

get_template_part( 'formats/content', 'none' );

endif; ?>

</main>

<?php get_footer();