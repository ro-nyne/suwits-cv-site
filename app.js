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
VanillaTilt.init(document.querySelectorAll(".sec_container .card_3d_container .card"), {
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

const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll",showBtn)
scrollBtn.addEventListener("click",scrollToTop)

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrollTotal > .3){
        scrollBtn.classList.add("show-top-btn")
    }
    else{
        scrollBtn.classList.remove("show-top-btn")
    }
}

function scrollToTop(){
    rootEl.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

var swiper = new swiper("slider-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });