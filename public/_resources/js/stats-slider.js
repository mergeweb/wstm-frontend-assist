const swiper = new Swiper('.stats-slider-swiper', {
    // Optional parameters
    grabCursor: true,
    slidesPerView: 1.5,
    freeMode: true,

    keyboard: {
        enabled: true,
    },

    breakpoints: {
        992: {
            slidesPerView: 3.5
        },
        768: {
            slidesPerView: 2.5
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.stats-slider-next',
        prevEl: '.stats-slider-prev',
    },

});