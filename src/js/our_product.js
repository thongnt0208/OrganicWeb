var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 2,
    perMove: 2,
    breakpoints: {
      1163: {
        perPage: 1,
      },
    }
  } );

  splide.mount();