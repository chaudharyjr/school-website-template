jQuery(document).ready(function( $ ) {
            $("#menu").mmenu({
               "extensions": ["border-indent","effect-listitems-drop","iconbar","shadow-page","pagedim-white"
               ],
               "autoHeight": true,"offCanvas": {
            "position": "right"},
               "navbar":{
                "add":false
               }
            });
            var API = $("#menu").data( "mmenu" );

            $(".movecloseright").click(function() {
            API.close();
      });
         });
        
   jQuery('#news-demo').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box news-slider" />', // wrapper to wrap everything, including pager
  elements: 'article', // elments cointaining slide content

  // options
  adaptiveHeight: false, // height of the sliders adapts to current 
  captions: false,

  // pager
  pagerClass: 'news-pager',

  // transitions
  transition: 'horizontal', // fade, horizontal, kenburns, false
  speed: 1200,
  pause: 8000,

  // slideshow
  autoDirection: 'prev'
});

$('.parallax-window').parallax({imageSrc: 'images/wall7.jpg'});

jQuery('#shop-demo').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box shop-slider" />', // wrapper to wrap everything, including pager
  elements: 'article', // elments cointaining slide content

  // options
  adaptiveHeight: false, // height of the sliders adapts to current slide
  start: 2, // num (starting from 1), random
  loop: false, // first -> last & last -> first arrows
  captionsSrc: 'article',
  captions: 'custom', // Position: overlay, below, custom, false
  captionsEl: '.product-name',

  // pager
  pager: false,

  // transitions
  slideMargin: 20, // spacing between slides (in %)
  useCSS: true,
  transition: 'horizontal',

  // slideshow
  auto: false
});
$(document).ready(function() {
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $("#nav-bar").position();
        if ( y > x.top){
            $('#fix-top').fadeIn("slow").css({"position":"fixed","top":"0","left":"0"});
        } else {
            $('#fix-top').fadeOut().css({"display":"none"});
        }
      });
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $("#description").position();
        if ( y > x.top - 100 ){
            $('#fix-top-mobile').fadeIn().css({"position":"fixed","top":"0","left":"0"});
        } else {
            $('#fix-top-mobile').fadeOut().css({"display":"none"});
        }
      });

});
   