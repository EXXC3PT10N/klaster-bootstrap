(self["webpackChunkfs_degrees_theme_boilerplate"] = self["webpackChunkfs_degrees_theme_boilerplate"] || []).push([["assets_js_components_gsap_parallax-image_js"],{

/***/ "./assets/js/components/gsap/parallax-image.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/gsap/parallax-image.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (gsap) {
  var animatedImages = document.querySelectorAll('.animated-image');
  var main = document.querySelector('.main');
  animatedImages.forEach(function (image) {
    var bg = image.querySelector('img'); //console.log(bg);

    gsap.to(bg, {
      scrollTrigger: {
        trigger: image,
        scrub: 0.5,
        invalidateOnRefresh: true
      },
      y: main.offsetHeight - bg.offsetHeight,
      ease: "none"
    }); //console.log(bg.offsetHeight);
  });
};

/***/ })

}]);