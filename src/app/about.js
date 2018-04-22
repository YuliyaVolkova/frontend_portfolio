import 'normalize.css';
import '../assets/styles/about.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import hamburgerNav from './components/c-hamburger.js';
import scrollAbout from './components/scroll_about.js';
import diagrammsSkills from './components/diagramm_skills.js';
const config = require('../../config.json');
const keyMap = config.mapKey;

///*-------------------------------------------
///* inject google-map script tag to html page
///*-------------------------------------------
const injectMap = () => {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${keyMap}`;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
};
injectMap();
import Vue from 'vue';
import GoogleMap from './components/gmap.vue';
require('../assets/images/decor/map_marker.svg');
Vue.config.productionTip = true;
//Vue.config.productionTip = false;
require.config({
  paths: {
    'image-preloader': './components/imagePreloader.min',
  },
});
import preloader from './components/preloader_index.js';

///*------------------------------------
///* init app about-page
///*-------------------------------------
const init = () => {
  require(['image-preloader'], preloader)
    .then(()=> {
      scrollAbout.handler();
      diagrammsSkills.init();
      hamburgerNav.handler();
      new Vue({
        el: '.l-map-container',
        render: h => h(GoogleMap),
      });
    });
};
///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');