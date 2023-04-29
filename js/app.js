//Back to Top
class Backtotop {
  constructor() {
    this.backbutton = document.getElementById("topBtn");
  }

  init() {
    window.onscroll = ('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.backbutton.style.display = "block";
      } else {
        this.backbutton.style.display = "none";
      }
    });

    this.backbutton.addEventListener('click', () => {
      this.top();
    });
  }

  top() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
      window.scrollBy(0, -50);
      this.timeout = setTimeout(() => {
        this.top();
      }, 10);
    }
  }
}

const backtotop = new Backtotop();
backtotop.init();


//Navigation main menu
( function() {
  const siteNavigation = document.getElementById( 'site-navigation' );

  // Return early if the navigation doesn't exist.
  if ( ! siteNavigation ) {
    return;
  }

  const hamburger = document.querySelector('.hamburger')

  const button = siteNavigation.getElementsByTagName( 'div' )[ 0 ];

  // Return early if the button doesn't exist.
  if ( 'undefined' === typeof button ) {
    return;
  }

  const menu = siteNavigation.getElementsByTagName( 'section' )[ 0 ];

  // Hide menu toggle button if menu is empty and return early.
  if ( 'undefined' === typeof menu ) {
    button.style.display = 'none';
    return;
  }

  if ( ! menu.classList.contains( 'nav-menu' ) ) {
    menu.classList.add( 'nav-menu' );
  }

  // Toggle the .toggled class and the aria-expanded value each time the button is clicked.
  button.addEventListener( 'click', function() {
    siteNavigation.classList.toggle( 'toggled' );
hamburger.classList.toggle("is-active");
    if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
      button.setAttribute( 'aria-expanded', 'false' );
    } else {
      button.setAttribute( 'aria-expanded', 'true' );
    }
  } );

  // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
  document.addEventListener( 'click', function( event ) {
    const isClickInside = siteNavigation.contains( event.target );

    if ( ! isClickInside ) {
      siteNavigation.classList.remove( 'toggled' );
      button.setAttribute( 'aria-expanded', 'false' );
      hamburger.classList.remove("is-active");
    }
  } );

  // Get all the link elements within the menu.
  const links = menu.getElementsByTagName( 'a' );

  // Get all the link elements with children within the menu.
  const linksWithChildren = menu.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

  // Toggle focus each time a menu link is focused or blurred.
  for ( const link of links ) {
    link.addEventListener( 'focus', toggleFocus, true );
    link.addEventListener( 'blur', toggleFocus, true );
  }

  // Toggle focus each time a menu link with children receive a touch event.
  for ( const link of linksWithChildren ) {
    link.addEventListener( 'touchstart', toggleFocus, false );
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    if ( event.type === 'focus' || event.type === 'blur' ) {
      let self = this;
      // Move up through the ancestors of the current link until we hit .nav-menu.
      while ( ! self.classList.contains( 'nav-menu' ) ) {
        // On li elements toggle the class .focus.
        if ( 'li' === self.tagName.toLowerCase() ) {
          self.classList.toggle( 'focus' );
        }
        self = self.parentNode;
      }
    }

    if ( event.type === 'touchstart' ) {
      const menuItem = this.parentNode;
      event.preventDefault();
      for ( const link of menuItem.parentNode.children ) {
        if ( menuItem !== link ) {
          link.classList.remove( 'focus' );
        }
      }
      menuItem.classList.toggle( 'focus' );
    }
  }
}() );