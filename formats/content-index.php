<?php
/**
 * Template part for displaying index - eg index.php
 *
 *
 * @package howardlucas
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('index'); ?>>

  <div class="index-content">
   
    <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?> - <?php echo howardlucas_excerpt(); ?></a></h2>
   
  </div><!-- .index-content -->

  <footer class="index-meta">
   
    <?php howardlucas_entry_footer(); ?>
    
  </footer><!-- .index-meta -->
  
</article><!-- #post-<?php the_ID(); ?> -->