module.exports = function (gsap) {
  const drawSection = document.querySelectorAll('.animated-content');
  const svg = document.querySelectorAll('.arrow');
  const svgMobile = document.querySelectorAll('.arrow-sec');
  const media = window.matchMedia('(min-width: 1023px)')
  if (media.matches) {
    gsap.from(svg, {
      scrollTrigger: {
        trigger: drawSection,
        scrub: 1,
        markers: false,
        start: "top center",
        end: "+=100"
      },
      ease: "none",
      drawSVG: '100% 100%',
      delay: 2,
      stagger: 1
    },
      { drawSVG: "0% 100%" }
    );
  }
  else {
    gsap.from(svgMobile, {
      scrollTrigger: {
        trigger: drawSection,
        scrub: 1,
        markers: true,
        start: "top center",
        end: "-200"
      },
      ease: "none",
      drawSVG: '50% 50%',
      delay: 2,
      stagger: 1
    },
    );
  }
};
