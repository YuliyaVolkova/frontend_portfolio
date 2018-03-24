import 'normalize.css';
import '../assets/styles/about.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();

import diagrammsSkills from './components/diagramm_skills.js';

import Vue from 'vue';
//import Test from './components/test.vue';
import GoogleMap from './components/gmap_one_point.vue';

//Vue.config.productionTip = false;


/*new Vue({
  el: '#app',
  template: '<Test/>',
  components: { Test },
});*/

window.onload = function() {
  scrollAbout.handler();
  diagrammsSkills.init();
  new Vue({
    el: '.l-map-container',
    template: '<google-map name="example"></google-map>',
    components: { GoogleMap },
  });
};
const injectMap = () => {

  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBeBIQIYzh41ByRq6AbIxnd-TWFZFMJkkU';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
};

injectMap();

console.log('It` work %%%!');

const scrollAbout = (() => {

  const sections = document.body.querySelectorAll('.l-section'),
    nextBut = document.body.querySelector('#next'),
    nodesSections = Array.prototype.slice.call(sections),
    arrOffset = nodesSections.map((item) => item.offsetTop);
  var  flag = false;

  
  function getSection(scrollPos)  {
    if(scrollPos<=arrOffset[0]) return 0;
    for (var i = 0; i < arrOffset.length-1; i++) {
      if(scrollPos>arrOffset[i]&&scrollPos<arrOffset[i+1])
        return i;
    }
    return arrOffset.length-1;
  }

  function checkScroll() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const index = getSection(scrollPos+50);
    window.location.hash = sections[index].getAttribute('data-section');
  }

  function showSection(e) {
    if(!window.location.hash&&!e) return;
    const hash = e?this.getAttribute('href'):window.location.hash,
      dataSect = hash.split('#').join(''),
      sectionAct = document.body.querySelector(`.l-section[data-section="${dataSect}"`),
      index = nodesSections.indexOf(sectionAct);
    var scrollPos = arrOffset[index]-25;
    if(e) animateMove(e, scrollPos);
    else 
      document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
  }

  const animate = (options) => {
    flag = true;
    let start = performance.now();
    var startPos = window.pageYOffset || document.documentElement.scrollTop;
    requestAnimationFrame(function _animate(time) {
    // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) {timeFraction = 1;
        flag = false;}
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
      duration: 700,
      timing: function(timeFraction) {
        return timeFraction;
      },
      move: function(progress, startPos) {
        document.documentElement.scrollTop = document.body.scrollTop = startPos + (scrollPos- startPos)*(progress);
      },
    });
  };

  const handler = () => {

    showSection();
    window.addEventListener('scroll', checkScroll, false);
    nextBut.addEventListener('click', showSection, false);
  };

  return {handler};
})();