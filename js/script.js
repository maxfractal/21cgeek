$(document).ready(function() {
    //jquery load
    $('#slides').superslides({
        animation: 'fade',
        play: 2950,
        pagination: false
    });
    //vanilla js call
    var typed = new Typed(".typed", {
        strings: ["UX Architect ^3000","Product Designer ^2950","UX Strategy ^2950","Prototyping ^2950","UI Design ^2950","User Experience ^2950","Product Management ^2950"],
        typeSpeed: 30,
        loop: true,
        startDelay: 3000,
        smartBackspace: true,
        showCursor: false
    });
    //owl carousel jquery
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            568:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            768:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            },
            1024:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });


    var skillsTopOffset = $(".skillsSection").offset().top;
    /* console.log(skillsTopOffset); */

    $(window).scroll(function() {
        console.log(window.pageYOffset);

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
            //easy pie chart
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: '#b90d0d',
                scaleColor: false,
                lineWidth: 10,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        };
    })
});

