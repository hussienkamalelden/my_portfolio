'use strict';

////////////////Start Loading Screen////////////////
// When the page loaded ..
$(window).on("load", function () {
    //Fade out spinner first in 2s after page loaded ..
    $(".preloader").fadeOut(500,
        function () {
            //Reset body to overflow (auto) again after loading screen fade out ..
            $("body").css("overflow", "auto");

            //Fade out background 2s after spinner fade out ..
            $(this).parent().fadeOut(1000,
                function () {
                    //Remove loading screen from DOM tree
                    $(this).remove;
                });
        });
});
////////////////End Loading Screen////////////////

//////////////// Start Navbar effect when scroll ////////////////
//Check if user scrolled over than nav's height add class scrolled to class navbar ..
$(function () {
    'use strict';

    $(window).scroll(function () {
        var navbar = $(".navbar");
        if ($(window).scrollTop() >= navbar.height()) {
            //check if navbar has class scrolled or not .. (for best performance)
            if (!navbar.hasClass("scrolled")) {
                // add scrolled to navbar only one time ..
                navbar.addClass('scrolled');
            }
        } else {
            //check if navbar has class scrolled or not .. (for best performance)
            if (navbar.hasClass("scrolled")) {
                // remove scrolled to navbar only one time ..
                navbar.removeClass('scrolled');
            }
        }
    });
});
//////////////// End Navbar effect when scroll ////////////////

////////////////Start Scroll to top////////////////
//Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    //Script for button move to top .. 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
////////////////End Scroll to top////////////////

////////////////////Start Script for Navbar Active Tab////////////////////
$(".navbar-collapse .nav-link").on("click", function () {
    $(".navbar-collapse").find(".active").removeClass("active");
    $(this).addClass("active");
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').removeClass('show');
});
////////////////////End Script for Navbar Active Tab//////////////////////

//////// Start add animation to job ////////
// add job title animation when page loaded ..
$(window).on("load", function () {
    $(".job-title").addClass("job-title-animation");
});
//////// End add animation to job ////////
