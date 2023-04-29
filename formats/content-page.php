<?php
/**
 * Template part for displaying posts
 * @package howardlucas-web
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="page-header">
    <?php
      the_title( '<h1>', '</h1>' ); ?>
    
  </header><!-- .page-header -->

  <div class="page-content">
    <?php
    the_content();
    ?>
  </div><!-- .page-content -->

</article><!-- #post-<?php the_ID(); ?> -->
