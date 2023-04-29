<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package howardlucas
 */

get_header();
?>

  <main id="main" class="main">

    <section class="error-404 not-found">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/404.png" alt="page not found image">
      <header class="page-header">
        <h1><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'howardlucas' ); ?></h1>
      </header><!-- .page-header -->

      <div class="page-content">
        <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'howardlucas' ); ?></p>

          <?php
          get_search_form();

          the_widget( 'WP_Widget_Recent_Posts' );
          ?>

          <div class="widget widget_categories">
            <h2 class="widget-title"><?php esc_html_e( 'Most Used Categories', 'howardlucas' ); ?></h2>
            <ul>
              <?php
              wp_list_categories(
                array(
                  'orderby'    => 'count',
                  'order'      => 'DESC',
                  'show_count' => 1,
                  'title_li'   => '',
                  'number'     => 10,
                )
              );
              ?>
            </ul>
          </div><!-- .widget -->

          <?php
          /* translators: %1$s: smiley */
          $howardlucas_archive_content = '<p>' . sprintf( esc_html__( 'Try looking in the monthly archives. %1$s', 'howardlucas' ), convert_smilies( ':)' ) ) . '</p>';
          the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$howardlucas_archive_content" );
          ?>

      </div><!-- .page-content -->
    </section><!-- .error-404 -->

  </main><!-- #main -->

<?php
get_footer();
