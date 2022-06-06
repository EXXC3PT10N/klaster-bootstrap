module.exports = function (gsap) {
    const animatedImages = document.querySelectorAll('.animated-image');
    const main = document.querySelector('.main');
    animatedImages.forEach(image => {
    let bg = image.querySelector('img');
    //console.log(bg);
    gsap.to(bg, {
        scrollTrigger: {
            trigger: image,
            scrub: 0.5,
            invalidateOnRefresh: true,
        },
        y: main.offsetHeight - bg.offsetHeight,
        ease: "none"
    });
    //console.log(bg.offsetHeight);
    
});
};