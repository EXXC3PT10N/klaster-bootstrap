const sliders = async function () {
    const HeroSlider = document.querySelectorAll('.hero-slider') !== null;
    const carouselTestimonials = document.querySelectorAll('.carousel-testimonials') !== null;
    const wiadomosciHome = document.querySelectorAll('.wiadomosci-home') !== null;
    const bazaHome = document.querySelectorAll('.baza-home') !== null;
    const bazawiedzyPage = document.querySelectorAll('.baza-wiedzy-slider') !== null;
    const wiadomosciPage = document.querySelectorAll('.wiadomosci-page') !== null;
    const firmyPagination = document.querySelectorAll('.firmy-pagination') !== null;
    // Execute code if You really need it
    if (HeroSlider || carouselTestimonials || wiadomosciHome || bazaHome || bazawiedzyPage || wiadomosciPage || firmyPagination) {
        let SwiperLib = await import('swiper/bundle');
        let Swiper = SwiperLib.default;

        if (HeroSlider) {
            const HeroSliderSwiper = new Swiper('.hero-slider', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    allowTouchMove: true,
                    disableOnInteraction: true,
                    pagination: {
                        el: '.hero-slider__pagination',
                        type: 'bullets',
                        clickable: true,
                    },
            });
        } 
        if (firmyPagination) {
            const firmyPaginationSwiper = new Swiper('.firmy-pagination', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.firmy-slider__pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    breakpoints: {
                        0: {
                          
                            slidesPerView: 1,
                        },
                        768: {
                           
                            slidesPerView: 2,

                        },
                        1366: {
                            
                            slidesPerView: 3,

                        },
                    }
            });
        }   
        if (carouselTestimonials) {
            document.querySelectorAll('.carousel-testimonials').forEach(el => {

                let carouselTestimonialSwiper = new Swiper(el, {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    breakpoints: {
                        0: {
                          
                            slidesPerView: 1,
                        },
                        768: {
                           
                            slidesPerView: 2,

                        },
                        1366: {
                            
                            slidesPerView: 3,

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
        if (bazawiedzyPage) {
            document.querySelectorAll('.baza-wiedzy-slider').forEach(el => {

                let carouselTestimonialSwiper = new Swiper(el, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    breakpoints: {
                        992: {
                            slidesPerView: 2,
                        }
                    }
                    
                });

                const prevBtn = document.querySelector('.baza-wiedzy__nav__prev'),
                    nextBtn = document.querySelector('.baza-wiedzy__nav__next');

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
        if (wiadomosciHome) {
            document.querySelectorAll('.wiadomosci-home').forEach(el => {

                let carouselTestimonialSwiper = new Swiper(el, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: false,
                    
                });

                const prevBtn = document.querySelector('.wiadomosci-home__nav__prev'),
                    nextBtn = document.querySelector('.wiadomosci-home__nav__next');

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
        if (bazaHome) {
            document.querySelectorAll('.baza-home').forEach(el => {

                let carouselTestimonialSwiper = new Swiper(el, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: false,
                });

                const prevBtn = document.querySelector('.baza__nav__prev'),
                    nextBtn = document.querySelector('.baza__nav__next');

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
        if (wiadomosciPage) {
            document.querySelectorAll('.wiadomosci-page').forEach(el => {

                let carouselTestimonialSwiper = new Swiper(el, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                });

                const prevBtn = document.querySelector('.wiadomosci__nav__prev'),
                    nextBtn = document.querySelector('.wiadomosci__nav__next');

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
    }
}

export const init = sliders;