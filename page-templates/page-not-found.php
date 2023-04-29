<?php
/**Template Name: Not Found
 * A test page for the page npt found - not a working file
 *
 * @package howardlucas
 */

get_header();
?>

  <main id="main" class="main">

   <section class="no-results not-found">
  <header class="page-header">
    <h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'howardlucas' ); ?></h1>
  </header><!-- .page-header -->

  <div class="page-content">
    <?php
    if ( is_home() && current_user_can( 'publish_posts' ) ) :

      printf(
        '<p>' . wp_kses(
          /* translators: 1: link to WP admin new post page. */
          __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'howardlucas' ),
          array(
            'a' => array(
              'href' => array(),
            ),
          )
        ) . '</p>',
        esc_url( admin_url( 'post-new.php' ) )
      );

    elseif ( is_search() ) :
      ?>

      <p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'howardlucas' ); ?></p>
      <?php
      get_search_form();

      the_widget( 'WP_Widget_Recent_Posts' );

    else :
      ?>

      <p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'howardlucas' ); ?></p>
      <?php
      get_search_form();

      the_widget( 'WP_Widget_Recent_Posts' );

    endif;
    ?>
  </div><!-- .page-content -->
</section><!-- .no-results -->

  </main><!-- #main -->

<?php
get_footer();
