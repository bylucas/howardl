<?php
//Template Name: Sitemap
//
// @package howardlucas
// ========================================
// To show all pages, categories and posts
// ========================================
get_header(); ?>

<main id="main" class="main">

  <header class="page-header">
    <?php
      the_title( '<h1>', '</h1>' ); ?>
    
  </header><!-- .page-header -->

  <div class="sitemap-body">
    <div class="sitemap-col">
      <h3><?php _e('Pages', 'howardlucas'); ?></h3>
      <ul>
        <?php wp_list_pages('title_li='); ?>
      </ul>
                      
      <h3><?php _e('#Categories', 'howardlucas'); ?></h3>
      <ul class="page-ul">
        <?php wp_list_categories('title_li='); ?>
      </ul>            
      </div><!-- end site_left -->
      
      <div class="sitemap-col">
        <h3><?php _e('Articles', 'howardlucas'); ?></h3>
        <ul>
          <?php $recentPosts = new WP_Query();
$recentPosts->query('showposts=1000&cat=-8'); ?>
          <?php while ($recentPosts->have_posts()) : $recentPosts->the_post(); ?>
            <li>
             <?php echo get_post_meta($post->ID, 'top-title', true); ?>
              <a href="<?php the_permalink() ?>" rel="bookmark">
                <?php the_title(); ?>
              </a>
            </li>
              <?php endwhile;?>
          </ul>
        </div><!-- end site_right -->
      </div><!-- end sitemap-body -->
    </main>
  <?php get_footer(); ?>
