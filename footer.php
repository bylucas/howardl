<?php
/**
 * The template for displaying the footer
 *
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package howardlucas
 */

?>

  <footer id="colophon" class="site-footer">
    
    <?php get_template_part('templates/footer-navigation'); ?>
    <div class="site-info">
        &copy;<?php echo date('Y'); ?>
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
            <?php bloginfo( 'name' ); ?>
          </a> | <a href="mailto:h@howardl.org?Subject=Enquiry%20from%20the%20howardl-website">Contact</a> | <a href="/privacy-policy/">Privacy</a> | <a href="/sitemap/">SiteMap</a>
    </div><!-- .site-info -->
  </footer><!-- #colophon -->
</div><!-- wrapper -->

<?php wp_footer(); ?>

</body>
</html>
