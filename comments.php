<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @package howardlucas
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
  return;
}
?>

<div id="comments" class="comments-area">

  <?php
  // You can start editing here -- including this comment!
  if ( have_comments() ) :
    ?>
    <h2 class="comments-title">
      <?php
      $howardlucas_comment_count = get_comments_number();
      if ( '1' === $howardlucas_comment_count ) {
        printf(
          /* translators: 1: title. */
          esc_html__( 'One comment on &ldquo;%1$s&rdquo;', 'howardlucas' ),
          '<span>' . wp_kses_post( get_the_title() ) . '</span>'
        );
      } else {
        printf( 
          /* translators: 1: comment count number, 2: title. */
          esc_html( _nx( '%1$s comment on &ldquo;%2$s&rdquo;', '%1$s comments on &ldquo;%2$s&rdquo;', $howardlucas_comment_count, 'comments title', 'howardlucas-web' ) ),
          number_format_i18n( $howardlucas_comment_count ), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
          '<span>' . wp_kses_post( get_the_title() ) . '</span>'
        );
      }
      ?>
    </h2><!-- .comments-title -->

    <!-- <ol class="comment-list"> -->
      <?php
      wp_list_comments(
        array(
          'style'      => 'div',
          'short_ping' => true,
          'callback'          => 'howardlucas_comments'
        )
      );
      ?>
    <!-- </ol> -->

    <?php
    the_comments_navigation();

    // If comments are closed and there are comments, let's leave a little note, shall we?
    if ( ! comments_open() ) :
      ?>
      <p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'howardlucas' ); ?></p>
      <?php
    endif;

  endif; // Check for have_comments().

  $comments_args = array(
  'fields' => apply_filters(
  'comment_form_default_fields', array(
  'author' => '<input class="comment-form-author" id="author" placeholder="Your Name" name="author" type="text" value="' .
  esc_attr( $commenter['comment_author'] ) . '" size="30"' . '_s' . ' />' . ( $req ? '' : '' ),
  'email'  => '<input class="comment-form-email" id="email" placeholder="your-email@example.com" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) .
  '" size="30"' . '_s' . ' />'  . ( $req ? '' : '' ))),
  'comment_field' => '<textarea class="comment-form-comment" id="comment" name="comment" placeholder="Your thoughts feedback, click here & start typing" cols="45" rows="8" aria-required="true"></textarea>',
  'comment_notes_before' => '<p class="comment-notes">We won\'t publish your email address. All boxes are required.</p>',
  'comment_notes_after' => '',
  'title_reply' => 'Your Comments & Reviews'
  );
  comment_form($comments_args);
  ?>

</div><!-- #comments -->
