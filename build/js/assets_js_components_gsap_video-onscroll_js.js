(self["webpackChunkfs_degrees_theme_boilerplate"] = self["webpackChunkfs_degrees_theme_boilerplate"] || []).push([["assets_js_components_gsap_video-onscroll_js"],{

/***/ "./assets/js/components/gsap/video-onscroll.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/gsap/video-onscroll.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (ScrollTrigger) {
  var videoSection = document.querySelectorAll('.section-video');
  videoSection.forEach(function (section) {
    var video = section.querySelector('video');
    ScrollTrigger.create({
      once: true,
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      ease: "none",
      onEnter: function onEnter() {
        return video.play();
      },
      onEnterBack: function onEnterBack() {
        return video.play();
      },
      onLeave: function onLeave() {
        return video.pause();
      },
      onLeaveBack: function onLeaveBack() {
        return video.pause();
      }
    });
  });
};

/***/ })

}]);