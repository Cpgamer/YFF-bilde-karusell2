const sliderTabs = document.querySelectorAll(".")

// initialize swiper instance
const swiper = new swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
     autoplay: { delay: 4000 }
});

sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.sliderTo(index);
    });
});