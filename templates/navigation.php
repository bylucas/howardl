
<nav id="site-navigation" class="main-navigation">

   <div class="hamburger menu-toggle hamburger--squeeze" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( '', 'howardlucas' ); ?>
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>

<section class="menu-wrap">
  <p><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>

      <?php
      get_search_form();
      wp_nav_menu(
        array(
          'theme_location' => 'menu-1',
          'container' => 'false',
          'menu_id'        => 'primary-menu'
          //'menu_class'     => 'nav-menu'
        )
      );
      ?>
      </section>
    </nav><!-- #site-navigation -->