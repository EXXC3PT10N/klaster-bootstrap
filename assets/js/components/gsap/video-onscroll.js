module.exports = function (ScrollTrigger) {
    const videoSection = document.querySelectorAll('.section-video');
    videoSection.forEach(section => {
        let video = section.querySelector('video');
        ScrollTrigger.create({
            once: true,
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            markers: false,
            ease: "none",
            onEnter: () => video.play(),
            onEnterBack: () => video.play(),
            onLeave: () => video.pause(),
            onLeaveBack: () => video.pause(),
        });
    });
};
