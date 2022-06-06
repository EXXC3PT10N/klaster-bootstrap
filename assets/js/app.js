window.$ = window.jQuery = require('jquery');

// LazyLoad - https://github.com/aFarkas/lazysizes
import 'lazysizes'
import 'flowbite';

// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
// Alpine - https://alpinejs.dev/essentials/installation
import Alpine from 'alpinejs'
window.Alpine = Alpine

// Theme Functions
//const fSmoothScroll = require('./utils/smooth-scroll')
const fCarousels = require('./components/carousels')
//const fScroll = require('./utils/scroll')
//const fGSAPController = require('./components/gsap-controller')
//const fAccordion = require('./components/accordion')

// Vue Support Function
import {
    createApp,
    defineAsyncComponent
} from 'vue'

const InitVueComponents = () => {
    // Async components
    // const SimpleComponent = defineAsyncComponent(() => import("./vue/simple-component"));
    // Static Components
    // const StaticComponent = require('./vue/multi-file-component/child-component').default;

    // Init Vue Instance
    const $VueApp = createApp({});

    // component() can be chained :)

    // $VueApp
    //     .component("child-component", StaticComponent);
    // $VueApp.mount('#vue-space');
}

// Initialise our components on jQuery.ready…
jQuery(function ($) {
    // Static Functions
    //fSmoothScroll()
    //InitVueComponents()
    //fAccordion()
    
    // plugins
    //Alpine.start()

    // Async Functions
    //fCarousels.init()
    //ffScroll.init()
    //fGSAPController.init()
})
