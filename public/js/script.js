$(document).ready(function () {
    // Load Header and Footer dynamically from separate HTML files
    $("#header").load("layouts/header.html");
    $("#footer").load("layouts/footer.html");

    // Smooth scrolling for internal links
    $("a[href^='#']").on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000); // Smooth scroll on anchor click
        }
    });

    // Show or hide the scroll to top button based on scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) { // Show button when scrolled 200px
            $('#topBtn').removeClass('hidden');
        } else {
            $('#topBtn').addClass('hidden');
        }
    });

    // Scroll to top when the button is clicked
    $('#topBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000); // Scroll to top smoothly
    });
});
