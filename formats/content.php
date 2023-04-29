<?php
/**
 * Template part for displaying posts
 * @package howardlucas-web
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="post-header">
    <?php
      the_title( '<h1>', '</h1>' ); ?>

      <div class="post-meta">
        <?php
        howardlucas_top_meta();
        ?>
      </div><!-- .post-meta -->
    
  </header><!-- .post-header -->

  <div class="post-content">
    <?php
    the_content();
    ?>
  </div><!-- .post-content -->

</article><!-- #post-<?php the_ID(); ?> -->
