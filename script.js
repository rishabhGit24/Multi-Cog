document.addEventListener("DOMContentLoaded", function () {
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        // Check scroll direction
        if (scrollPosition > lastScrollTop) {
            // Scrolling down
            document.getElementById("scrollImage").style.opacity = 0;
        } else {
            // Scrolling up
            document.getElementById("scrollImage").style.opacity = 1;
        }

        lastScrollTop = scrollPosition;
    });
});
