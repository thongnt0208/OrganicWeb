var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 2,
    perMove: 2,
    breakpoints: {{
        perPage: 1,
      },
    }
  } );

  splide.mount();