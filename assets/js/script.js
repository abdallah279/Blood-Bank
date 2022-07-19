$(document).ready(function(){
    $(".articles-carousel").owlCarousel({
        loop:true,
        margin:50,
        rtl: true,
        nav:true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

