
// Fade Out Loading Imo On Window Load
window.onload = function() {
    $('.spinner-box .spinner').fadeOut(500, function() {
        $(this).parent().fadeOut(800);
    });
}

$(function () {

    $(window).resize(function() {
        $('.header-content').css('padding-top', ($('header').height() - $('.header-content').height()) / 2 - $('.navbar').height() - 100);
    });

    $('.header-content').css('padding-top', ($('header').height() - $('.header-content').height()) / 2 - $('.navbar').height() - 100);

    // Next Section
    $('header .fa-chevron-down').click(function () {
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 800)
    });


    // Full Image Plugin
    $('fullBackground').fullClip({
        images : ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg']
    });

    // Change Collapse On Focus

    $('.navbar-toggle').on('click', function () {
        let n = 0;
        if( n === 0 ) {
            $('.navbar-collapse').css('background', '#2c3e50');
            n++;
        } else {
            $('.navbar-collapse').css('background', 'transparent');
            n = 0;
        }

    });


    // Testimonials Fade In Slides On By One

    (function autoSlider() {

        $('.slider .active').each(function () {


            if (!$(this).is(':last-child')) {


                $(this).delay(800).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                });

            } else {

                $(this).delay(800).fadeOut(1000, function () {


                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();
                });
            }

        });

    }());


    // Set Background To Navbar On Scroll Down

    // Make Navbar Colored By File Name

    $(window).on('scroll', function () {
        // Whatspp Fades Toggle

        if($(this).scrollTop() >10) {
            $('.wts-cont').fadeIn(500);
        } else {
            $('.wts-cont').fadeIn(500);
        }
    });
    if (fileName === 'index.html' || fileName === 'index_rtl.html') {
        $('.navbar').css('background-color', 'transparent').removeClass('navbar-fixed-top');

    } else {
        $('.navbar').css('background-color', '#2c3e50').addClass('navbar-fixed-top');
    }

});
