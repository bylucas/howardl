<?php /************* COMMENT LAYOUT *********************/

// Comments Layout
function howardlucas_comments( $comment, $args, $depth ) {
   $GLOBALS['comment'] = $comment; ?>
  <div id="comment-<?php comment_ID(); ?>" <?php comment_class( ''); ?>>
    <article>
      <header class="comment-author vcard">
        <?php
        echo get_avatar($comment,$size='55',$default='' );
        ?>
        <div class="comment-wrap">
        <?php 
        printf( '<cite class="fn">%1$s %2$s</cite>',
            get_comment_author_link(),
            // If current post author is also comment author, make it known visually.
            ( $comment->user_id === $comment->post_author ) ? '<span class="post-author"><span class="hidden">' . __( '- Author -', 'howardlucas' ) . '</span></span>' : '' );
edit_comment_link( __( 'Edit' ), '  ', '' ); 
    
    printf( '<time datetime="%2$s">%3$s</time>',
            esc_url( get_comment_link( $comment->comment_ID ) ),
            get_comment_time( 'c' ),
            /* translators: 1: date, 2: time */
            sprintf( __( '%1$s at %2$s', 'howardlucas' ), get_comment_date(), get_comment_time() )
          ); ?>
</div>
      </header>
      <?php if ($comment->comment_approved == '0') : ?>
        <div class="alert alert-info">
          <p>
            <?php _e( 'Your comment is awaiting moderation.', 'howardlucas' ) ?>
          </p>
        </div>
        <?php endif; ?>
          <section class="comment-content">
            <?php comment_text() ?>
          </section>
          <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))); ?>

    </article>
    <?php
}
