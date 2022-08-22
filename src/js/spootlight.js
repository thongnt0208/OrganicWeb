document.addEventListener( 'DOMContentLoaded', function() {
    var splideSpotlight = new Splide( '.splide.splide-spotlight',{
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        breakpoints: {
            460: {
                perPage: 1
            },
        },
        autoplay: true,
    } );
    splideSpotlight.mount();
} );