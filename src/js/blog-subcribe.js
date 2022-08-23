document.addEventListener( 'DOMContentLoaded', function() {
    var splide__blog = new Splide( '.splide.splide__blog',{
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        breakpoints: {
            1180: {
                perPage: 2
            },
            820: {
                perPage: 1
            },
        },
        // autoplay: true,
    } );
    splide__blog.mount();
  } );