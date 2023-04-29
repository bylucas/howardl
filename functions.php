<?php
/**
 * howardlucas functions and definitions
 *
 *
 * @package WordPress
 * @subpackage howardlucas
 * @since howardlucas 1.0
 */

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function howardlucas_setup() {

/*
    * Let WordPress manage the document title.
    * By adding theme support, we declare that this theme does not use a
    * hard-coded <title> tag in the document head, and expect WordPress to
    * provide it for us.
    */
  add_theme_support( 'title-tag' );

  /*
    * Enable support for Post Thumbnails on posts and pages.
    */
  //add_theme_support( 'post-thumbnails' );

  // This theme uses wp_nav_menu() in two locations.
  register_nav_menus(
    array(
      'menu-1' => esc_html__( 'Primary', 'howardlucas' ),
    'footer-links' => esc_html__( 'Footer Menu', 'howardlucas'))
  );

  /*
    * Switch default core markup for search form, comment form, and comments
    * to output valid HTML5.
    */
  add_theme_support(
    'html5',
    array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
      'style',
      'script',
    )
  );

  /**
     * Add post-formats support.
     */
    add_theme_support(
      'post-formats',
      array(
        'link',
        'aside',
        'gallery',
        'image',
        'quote',
        'status',
        'video',
        'audio',
        'chat',
      )
    );

  // Add theme support for selective refresh for widgets.
  add_theme_support( 'customize-selective-refresh-widgets' );

  //add support for blocks and image align wide
  add_theme_support( 'wp-block-styles' );

  add_theme_support( 'align-wide' );

  // Remove the URL from the comment form
function howardlucas_disable_comment_url($fields) { 
    unset($fields['url']);
    return $fields;
 }

add_filter('comment_form_default_fields','howardlucas_disable_comment_url');

  /**
   * Add support for core custom logo.
   */
  add_theme_support(
    'custom-logo',
    array(
      'height'      => 250,
      'width'       => 250,
      'flex-width'  => true,
      'flex-height' => true,
    )
  );
}
add_action( 'after_setup_theme', 'howardlucas_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function howardlucas_content_width() {
  $GLOBALS['content_width'] = apply_filters( 'howardlucas_content_width', 640 );
}
add_action( 'after_setup_theme', 'howardlucas_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function howardlucas_widgets_init() {
  register_sidebar(
    array(
      'name'          => esc_html__( 'Sidebar', 'howardlucas' ),
      'id'            => 'sidebar-1',
      'description'   => esc_html__( 'Add widgets here.', 'howardlucas' ),
      'before_widget' => '<section id="%1$s" class="widget %2$s">',
      'after_widget'  => '</section>',
      'before_title'  => '<h2 class="widget-title">',
      'after_title'   => '</h2>',
    )
  );
}
add_action( 'widgets_init', 'howardlucas_widgets_init' );

//Link the functoions from the functions folder
/*
 * Add the scripts
 */
require get_template_directory() . '/functions/scripts.php';

/*
 * Clean unwanted data from the head
 */
require get_template_directory() . '/functions/head-cleanup.php';

/**
 * Add template functions
 */
require get_template_directory() . '/functions/template-functions.php';

/**
 * Add template tags
 */
require get_template_directory() . '/functions/template-tags.php';

/**
 * Add a comment layout
 */
require get_template_directory() . '/functions/comments-layout.php';

/**
 * Add Related Posts
 */
require get_template_directory() . '/functions/related-posts.php';

/**
 * Add infinite scroll
 */
require get_template_directory() . '/functions/infinite-scroll.php';