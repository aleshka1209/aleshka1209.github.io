$(function(){
    $('.burger-menu').on('click', '.bar', function() {
        $('body').toggleClass('lock');
        $('.menu-burger').slideToggle();
        $('.bar').toggleClass('change');
        $('.menu-burger__burger li').slideRight();
    });


    $('.work__column').slick({
        slidesToShow: 3,
        // arrows: false,
        // autoplay: true,
        // autoplaySpeed: 500,
        // speed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});