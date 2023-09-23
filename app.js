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