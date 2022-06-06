const sliders = async function () {
    const gallerySlider = document.querySelectorAll('.swiper-gallery') !== null;
    const carouselTestimonials = document.querySelectorAll('.carousel-testimonials') !== null;
    const updatesSlider = document.querySelectorAll('.updatesSlider') !== null;
    const contentBox = document.querySelectorAll('.content-box-swiper') !== null;
    // Execute code if You really need it
    if (gallerySlider || carouselTestimonials || updatesSlider) {
        let SwiperLib = await import('swiper/bundle');
        let Swiper = SwiperLib.default;

        if (gallerySlider) {
            const gallerySliderSwiper = new Swiper('.swiper-gallery', {
                lazy: false,
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                effect: 'fade',
                fadeEffect: { crossFade: true, },
                simulateTouch: false,
                autoplay: {
                    delay: 5000,
                },
                speed: 2000,

                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
        if (carouselTestimonials) {
            document.querySelectorAll('.carousel-testimonials').forEach(el => {

                let carouselTestimonialSwiper = new Swiper(el, {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    loop: false,
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    breakpoints: {
                        1023: {
                            pagination: false,

                        },
                    }

                });

                const prevBtn = document.querySelector('.carousel-testimonials__nav__prev'),
                    nextBtn = document.querySelector('.carousel-testimonials__nav__next');

                if (prevBtn != null) {
                    prevBtn.addEventListener('click', () => {
                        carouselTestimonialSwiper.slidePrev()
                    }, false);
                }

                if (nextBtn != null) {
                    nextBtn.addEventListener('click', () => {
                        carouselTestimonialSwiper.slideNext()
                    }, false);
                }

            });
        }
        if (updatesSlider) {
            const breakpoint = window.matchMedia('(min-width:1023px)');
            let updatesSlider;

            const breakpointChecker = function () {
                if (breakpoint.matches == false) {
                    if (updatesSlider !== undefined) updatesSlider.destroy(true, true);
                    return;
                } else if (breakpoint.matches == true) {
                    return enableSwiper();
                }
            };
            const enableSwiper = function () {
                updatesSlider = new Swiper('.updatesSlider', {
                    slidesPerView: 4,
                    spaceBetween: 18,
                    loop: false,
                    breakpoints: {
                        1920: {
                            spaceBetween: 28,

                        },
                    }
                });
                const prevBtn = document.querySelector('.carousel-testimonials__nav__prev'),
                    nextBtn = document.querySelector('.carousel-testimonials__nav__next');

                if (prevBtn != null) {
                    prevBtn.addEventListener('click', () => {
                        updatesSlider.slidePrev()
                    }, false);
                }

                if (nextBtn != null) {
                    nextBtn.addEventListener('click', () => {
                        updatesSlider.slideNext()
                    }, false);
                }
            };

            breakpointChecker();
            breakpoint.addEventListener("change", () => {
                breakpointChecker();
            });
        }
        if (contentBox) {

            const breakpoint = window.matchMedia('(max-width:1023px)');
            let contentBoxSwiper;
            const breakpointChecker = function () {
                if (breakpoint.matches == false) {
                    if (contentBoxSwiper !== undefined) contentBoxSwiper.destroy(true, true);
                    return;
                } else if (breakpoint.matches == true) {
                    return enableSwiper();
                }
            };
            const enableSwiper = function () {
                contentBoxSwiper = new Swiper('.content-box-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    loop: false,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    breakpoints: {
                        1023: {
                            pagination: false,

                        },
                    }
                });
            }
            breakpointChecker();
            breakpoint.addEventListener("change", () => {
                breakpointChecker();
            });
        }
        
    }


}

export const init = sliders;