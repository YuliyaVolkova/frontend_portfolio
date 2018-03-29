import 'normalize.css';
import '../assets/styles/about.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import hamburgerNav from './components/c-hamburger.js';

import diagrammsSkills from './components/diagramm_skills.js';
///*-------------------------------------------
///* inject google-map script tag to html page
///*-------------------------------------------
const injectMap = () => {

  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBeBIQIYzh41ByRq6AbIxnd-TWFZFMJkkU';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
};
injectMap();
//---------------------------------------------
import Vue from 'vue';
import GoogleMap from './components/gmap_one_point.vue';
require('../assets/images/decor/map_marker.svg');

Vue.config.productionTip = true;
//Vue.config.productionTip = false;

///*------------------------------------
///* init app about-page
///*-------------------------------------
const init = () => {
  scrollAbout.handler();
  diagrammsSkills.init();
  hamburgerNav.handler();
  new Vue({
    el: '.l-map-container',
    template: '<google-map name="example"></google-map>',
    components: { GoogleMap },
  });
};

///*-------------------------------------------
///* scroll to second screen on arrow-click
///*-------------------------------------------
const scrollAbout = (() => {

  let body =document.body,
    sections = [...body.querySelectorAll('.l-section')],
    nextBut = body.querySelector('#next'),
    container = body.querySelector('.l-scroll-parallax-container'),
    arrOffset = sections.map((item) => item.offsetTop);

  function showSection(e) {
    let hash = this.getAttribute('href')||window.location.hash,
      sectionAct = body.querySelector(`.l-section[data-section="${hash.replace(/#/,'')}"`),
      scrollPos = arrOffset[sections.indexOf(sectionAct)]-10;
    animateMove(e, scrollPos);
  }

  const animate = options => {
    let start = performance.now(),
      startPos = container.scrollTop;  
    requestAnimationFrame(function _animate(time) {
    // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
      // текущее состояние анимации
      let progress = options.timing(timeFraction);
      options.move(progress, startPos);
      if (timeFraction < 1) {
        requestAnimationFrame(_animate);
      }
    });
  };

  const animateMove = (e, scrollPos) => {
    e.preventDefault();
    animate({
      duration: 500,
      timing: function(timeFraction) {
        return timeFraction;
      },
      move: function(progress, startPos) {
        container.scrollTop = startPos + (scrollPos- startPos)*(progress);
      },
    });
  };

  const handler = () => {
    nextBut.addEventListener('click', showSection, false);
  };

  return {handler};
})();

///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');