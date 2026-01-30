// Denne starter Swiper som er et biblotek med forsjellige effekter på måten karusellen bytter bilde, bestemmer farten på overgangen mellom bildene og hvor lang tid den skal vente før slideren automatisk går videre til neste bilde

const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
    autoplay: { delay: 4000 }
});