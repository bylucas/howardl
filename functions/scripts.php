<?php /**
 * Enqueue scripts and styles.
 *
 * Register Google Fonts
 */
// function add_google_fonts() {
//  wp_enqueue_style( 'custom-google-fonts', 'https://fonts.googleapis.com/css?family=Raleway:300,3000i,400,400i,700,700i&display=swap|Source+Code+Pro|Ubuntu+Condensed', false );
//  }
//  add_action( 'wp_enqueue_scripts', 'add_google_fonts' );

function howardlucas_scripts() {
  
   wp_enqueue_style( 'howardlucas-style', get_template_directory_uri() . '/css/style.css' );

if ( is_singular() ) {
  wp_enqueue_script( 'howardlucas-prism', get_template_directory_uri() . '/js/prism.js', array(), '', true );
}

  wp_enqueue_script( 'howardlucas-scripts', get_template_directory_uri() . '/js/app-min.js', array(), '', true );

  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }
}
add_action( 'wp_enqueue_scripts', 'howardlucas_scripts' );