
// Show header on scroll up
/*
var scrollTimeOut = true,
    lastYPos = 0,
    yPos = 0,
    yPosDelta = 1,
    nav = $('nav.navbar'),
    navHeight = nav.outerHeight(),
    setNavClass = function() {
        scrollTimeOut = false;
        yPos = $(window).scrollTop();

        if(Math.abs(lastYPos - yPos) >= yPosDelta) {
            if (yPos > lastYPos && yPos > navHeight) {
                nav.addClass('hide-nav');
            } else {
                nav.removeClass('hide-nav');
            }
            lastYPos = yPos;
        }
    };

$(window).scroll(function(e){
    scrollTimeOut = true;
});

setInterval(function() {
    if (scrollTimeOut) {
        setNavClass();
    }

}, 250);

*/
/*mobile nav */

function openNav() {
document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}

/*Slideshow*/

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    // pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // Mobile touch events
    touchEventsTarget: '.swiper-wrapper'

    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',
  })
