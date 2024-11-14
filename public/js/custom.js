//function to rerverse the order of divs on mobile devices
$(document).ready(function () {
    // Check if the page is being viewed on a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() < 768) {
        // Get the two divs
        var div1 = $("#mobile-flip1");
        var div2 = $("#mobile-flip2");

        // Swap the order of the two divs
        div2.after(div1);
    }
});

$(document).ready(function () {
    // preload images
    $('.carousel-item img').each(function () {
        var img = new Image();
        img.src = $(this).attr('src');
    });
});

//click
$(document).ready(function () {
    var $listItems = $('.list-group-item');

    $listItems.click(function () {
        var $this = $(this);

        if (!$this.hasClass('active')) {
            $listItems.removeClass('active');
            $this.addClass('active');

            var slideIndex = $this.data('slide-to');
            $('#myCarousel').carousel(slideIndex);
        }
    });
});

// click
$(document).ready(function () {
    // Get the carousel headers
    var headers = $('#carousel-headers').find('h2');

    // Handle the "slide.bs.carousel" event
    $('#myCarousel').on('slide.bs.carousel', function (event) {
        // Get the index of the current slide
        var index = $(event.relatedTarget).index();

        // Remove the "active" class from all headers
        headers.removeClass('active');

        // Add the "active" class to the header corresponding to the current slide
        $('#carousel-header-' + index).addClass('active');
    });
});
//mouseover with delay
// $(document).ready(function () {
//     var timeoutId; // declare a variable to hold the timeout ID

//     $('.list-group-item').mouseover(function () {
//         var slideIndex = $(this).data('slide-to');

//         // clear the previous timeout (if any)
//         clearTimeout(timeoutId);

//         // set a new timeout to update the slide index and slide to the corresponding image
//         timeoutId = setTimeout(function () {
//             $('.list-group-item').removeClass('active');
//             $(this).addClass('active');
//             $('#myCarousel').carousel(slideIndex);
//         }.bind(this), 200); // set the delay to 500ms
//     });
// });

setTimeout(function () {
    document.querySelector('.splash_logo').classList.add('stopped');
}, 4000); // Stop the animation and keep the logo on the screen after 5 seconds


// $(document).ready(function () {
//     $(".main").onLoad(function () {
//         $("p").slideUp();
//     });
//     $(".btn2").click(function () {
//         $("p").slideDown();
//     });
// });

// $(document).ready(function () {
//     $('#main').slideUp(4000, function () {
//         $('.mw-625').slideUp(5000, function () {
//             $('.btn').slideUp(6000);
//         });
//     });
// });

// $(document).ready(function () {
//     $("#myCarousel").swiperight(function () {
//         $(this).carousel('prev');
//     });
//     $("#myCarousel").swipeleft(function () {
//         $(this).carousel('next');
//     });
// });

$(document).ready(function () {
    // Get the carousel headers
    var headers = $('#carousel-headers').find('h2');

    // Handle the "slid.bs.carousel" event
    $('#myCarousel').on('slid.bs.carousel', function (event) {
        // Get the index of the current slide
        var index = $(event.relatedTarget).index();

        // Remove the "active" class from all headers
        headers.removeClass('active');

        // // Wait until the image has finished sliding
        // setTimeout(function () {
        // Add the "active" class to the header corresponding to the current slide
        $('#carousel-header-' + index).addClass('active');
        // }, 100); // Change this number to adjust the delay time, if necessary
    });
});

