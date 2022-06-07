const sliders = async function () {
    const HeroSlider = document.querySelectorAll('.hero-slider') !== null;
    // Execute code if You really need it
    if (HeroSlider) {
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
    }
}

export const init = sliders;