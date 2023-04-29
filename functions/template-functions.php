<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package howardlucas
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function howardlucas_body_classes( $classes ) {
  // Adds a class of hfeed to non-singular pages.
  if ( ! is_singular() || is_page() ) {
    $classes[] = 'hfeed';
  }

  return $classes;
}
add_filter( 'body_class', 'howardlucas_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function howardlucas_pingback_header() {
  if ( is_singular() && pings_open() ) {
    printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
  }
}
add_action( 'wp_head', 'howardlucas_pingback_header' );

add_filter( 'excerpt_length', 'change_excerpt_length' );
function change_excerpt_length($length) {
    return 20; 
}

//estimated reading time
// function howardlucas_estimated_reading_time() {

//   $post = get_post();

//   $words = str_word_count( strip_tags( $post->post_content ) );
//   $minutes = floor( $words / 170 );
//   $seconds = floor( $words % 170 / ( 170 / 60 ) );

//   if ( 1 <= $minutes ) {
//     $estimated_time = sprintf( _n( '%d minute', '%d minutes', $minutes, 'howardlucas' ), $minutes );
//   } else {
//     $estimated_time = sprintf( _n( '%d second', '%d seconds', $seconds, 'howardlucas' ), $seconds );
//   }

//   $word_count = sprintf( _n( ' (%d word)', ' (%d words)', $words, 'howardlucas' ), $words  );
 
//  return $estimated_time . $word_count;


// }

//change text cookie consent comments
add_filter( 'comment_form_default_fields', 'tu_filter_comment_fields', 20 );
function tu_filter_comment_fields( $fields ) {
    $commenter = wp_get_current_commenter();

    $consent   = empty( $commenter['comment_author_email'] ) ? '' : ' checked="checked"';

    $fields['cookies'] = '<p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"' . $consent . ' />' . '<label for="wp-comment-cookies-consent">Save my name and email in this browser, I may come back.</label></p>';

    return $fields;
}

//remove word Category from Archive title
add_filter( 'get_the_archive_title', function ($title) {

    if ( is_category() ) {
            $title = single_cat_title( '', false );
        } elseif ( is_tag() ) {
            $title = single_tag_title( '', false );
        } elseif ( is_author() ) {
            $title = '<span class="vcard">' . get_the_author() . '</span>' ;
        } 

    return $title;

});

//contact form
// function howardlucas_create_contacts_table() {
 
//     global $wpdb;
 
//     $table_name = $wpdb->prefix . "contacts";
 
//     $charset_collate = $wpdb->get_charset_collate();
 
//     $sql = "CREATE TABLE IF NOT EXISTS $table_name (
//       id bigint(20) NOT NULL AUTO_INCREMENT,
//       name varchar(20) NOT NULL,
//       email varchar(20) NOT NULL,
//       message varchar(255) NOT NULL,
//       created_at datetime NOT NULL,
//       PRIMARY KEY id (id)
//     ) $charset_collate;";
 
//     require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
//     dbDelta($sql);
// }    
 
// add_action('init', 'howardlucas_create_contacts_table');


/************* EXCERPT *****************/

/**
 * Replaces "[...]" (appended to automatically and user generated excerpts) with ... and a 'Continue reading' link.
 *
 * @since howardlucas 1.0
 *
 * howardlucas_excerpt_more combined below for automatic and user generated excerpts
 */
function howardlucas_excerpt_more( $more ) {
  
  return '';
}

function howardlucas_excerpt_length($length) {
  return 20;
}

function howardlucas_global_excerpt($output) {
  global $post;

  return $output . sprintf( '&hellip;', 'howardlucas');
}

// Replaces the excerpt "Read More" text by a link
// function new_excerpt_more($more) {
//        global $post;
//   return '<a class="moretag" href="'. get_permalink($post->ID) . '"> Read on...</a>';
// }
// add_filter('excerpt_more', 'new_excerpt_more');


function howardlucas_excerpt() {
  
  add_filter( 'excerpt_more', 'howardlucas_excerpt_more' );
  add_filter( 'excerpt_length', 'howardlucas_excerpt_length' );
  add_filter( 'the_excerpt', 'howardlucas_global_excerpt' );
  return the_excerpt();
}

// To keep the excerpt_more as part of the exerpt take away the auto <p> wordpress generates
// use <p><?php echo howardlucas_excerpt(); </p> - in your template

 remove_filter('the_excerpt', 'wpautop');

 // Customise the log-in page

function howardlucas_login_css() {
  wp_enqueue_style( 'howardlucas_login_css', get_template_directory_uri() . '/css/login.css', false );
}

// changing the logo link from wordpress.org to your site
function howardlucas_login_url() {  return home_url(); }

// changing the alt text on the logo to show your site name
function howardlucas_login_title() { return get_option('blogname'); }

// calling it only on the login page
add_action( 'login_enqueue_scripts', 'howardlucas_login_css', 10 );
add_filter('login_headerurl', 'howardlucas_login_url');
add_filter('login_headertext', 'howardlucas_login_title');