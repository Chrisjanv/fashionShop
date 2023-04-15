// Back to top button scrolling and functionality
const topButton = document.getElementById("topButton");
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// gallery
$(document).ready(function () {
    $(".thumbnail").click(function () {
        var imgSrc = $(this).find("img").attr("src");
        $("#modal-image").attr("src", imgSrc);
    });
});



// Form tied to backend

// display specials on home page from the shop page

// Shop Page
