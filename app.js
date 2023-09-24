// Function show popup
document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".read-more-link");
    const popups = document.querySelectorAll(".popup");

    readMoreLinks.forEach(function (link, index) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            popups[index].style.display = "flex";
        });
    });

    const closePopups = document.querySelectorAll(".close-popup");
    closePopups.forEach(function (closeLink) {
        closeLink.addEventListener("click", function (e) {
            e.preventDefault();
            closeLink.closest(".popup").style.display = "none";
        });
    });
});
// VanillaTilt
VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});