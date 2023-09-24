// Function to show popups
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
// Assuming you have VanillaTilt imported correctly in your HTML or using a module system
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});

// Scroll Event
const progressEl = document.querySelector(".progress");
window.onscroll = () => scrollProgress();

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / pageHeight) * 100;
    progressEl.style.visibility = "visible";
    progressEl.style.width = scrollPercentage + '%'; // Corrected the typo here
}