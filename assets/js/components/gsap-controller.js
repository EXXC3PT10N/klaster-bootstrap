const gsapController = async function () {
    const parallaxImage = document.querySelector('.animated-image') !== null;
    const videoOnScroll = document.querySelector('.section-video') !== null;
    const drawOnScroll = document.querySelector('.animated-content') !== null;

    if (parallaxImage || videoOnScroll || drawOnScroll) {
        let gsap = await (await import('gsap')).default;
        let ScrollTrigger = await (await import('gsap/ScrollTrigger')).default;
        let DrawSVGPlugin = await (await import('gsap/DrawSVGPlugin')).default;

        gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

        if (parallaxImage) {
            let parallaxImagesAnimation = await (await import('./gsap/parallax-image')).default;
            parallaxImagesAnimation(gsap);
        }
        if (videoOnScroll) {
            let videoOnScrollAnimation = await (await import('./gsap/video-onscroll')).default;
            videoOnScrollAnimation(ScrollTrigger);
        }
        if (drawOnScroll) {
            let drawOnScrollAnimation = await (await import('./gsap/draw-onscroll')).default;
            drawOnScrollAnimation(gsap);
        }
        
    }
}
export const init = gsapController;