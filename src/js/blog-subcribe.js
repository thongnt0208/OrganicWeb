document.addEventListener( 'DOMContentLoaded', function() {
    var splideBlog = new Splide( '.splide.splide-blog',{
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        breakpoints: {
            460: {
                perPage: 1
            },
        },
        autoplay: true,
    } );
    splideBlog.mount();
  } );