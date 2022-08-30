// SLIDER 

$('.homesec2-sliderbox').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:3
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow:1
        }
      }
    ],
  });


  // HOME-SEC-4 SLIDER

  $('.home-sec-4-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });