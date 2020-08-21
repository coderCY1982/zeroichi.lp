var mainimage = $('.second-images_top') .offset().top;


$( window ).scroll(function() {
  if ( $(window).scrollTop() > mainimage - 100 ) {
    $( '#header' ).addClass( 'fixed' );
  } else {
    $( '#header' ).removeClass( 'fixed' );
  }
});
