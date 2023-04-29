<?php
 // =======================
 // Footer Links Template
 // =======================
 
?>
  <?php if ( has_nav_menu( 'footer-links' ) ) : ?>
    <nav class="site-footer-nav" role="navigation">
      <?php
        // footer links navigation menu.
        wp_nav_menu( array(
            'container' => false,
            'theme_location' => 'footer-links',
            'depth'          => 1,
            'link_after' => '</a><span class="spacer">|</span>',
        ) );
    ?>
    </nav>

    <?php else: ?>
    <nav class="site-footer-nav" role="navigation">
      <p class="third" style="margin: 0;">Theme: howardl</p>
    </nav>
    <?php endif; ?>