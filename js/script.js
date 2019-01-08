$(document).ready(function() {
    //jquery load
    $('#slides').superslides({
        animation: 'fade',
        play: 2780,
        pagination: false
    });
    //vanilla js call
    var typed = new Typed(".typed", {
        strings: ["UX Architect ^2780","Product Designer ^2780","UX Strategy ^2780","Prototyping ^3000","UI Design ^3000","User Experience ^3000","Product Management ^3000"],
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
    //easy pie chart
    $('.chart').easyPieChart({
        //your options goes here
    });
    
});

