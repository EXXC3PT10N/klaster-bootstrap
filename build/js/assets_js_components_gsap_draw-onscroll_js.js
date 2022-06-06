(self["webpackChunkfs_degrees_theme_boilerplate"] = self["webpackChunkfs_degrees_theme_boilerplate"] || []).push([["assets_js_components_gsap_draw-onscroll_js"],{

/***/ "./assets/js/components/gsap/draw-onscroll.js":
/*!****************************************************!*\
  !*** ./assets/js/components/gsap/draw-onscroll.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (gsap) {
  var drawSection = document.querySelectorAll('.animated-content');
  var svg = document.querySelectorAll('.arrow');
  var svgMobile = document.querySelectorAll('.arrow-sec');
  var media = window.matchMedia('(min-width: 1023px)');

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
    }, {
      drawSVG: "0% 100%"
    });
  } else {
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
    });
  }
};

/***/ })

}]);