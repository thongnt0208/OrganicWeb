var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 2,
    perMove: 2,
    breakpoints: {
      1160: {
        perPage: 1,
      },
    }
  } );
  
  splide.mount();