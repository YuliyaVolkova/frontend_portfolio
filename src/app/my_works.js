import 'normalize.css'; 
import '../assets/styles/my_works.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import hamburgerNav from './components/c-hamburger.js';
require.config({
  paths: {
    'image-preloader': './components/imagePreloader.min',
  },
});
import preloader from './components/preloader_index.js';
import blurResize from './components/blur.js';
import scrollWorks from './components/scroll_works.js';
///*-------------------------------
///* init app my_works-page
///*-------------------------------
const init = () => {
  require(['image-preloader'], preloader)
    .then(()=> {
      scrollWorks.handler();
      hamburgerNav.handler();
      require('./components/slider.js');
      blurResize.handler();
      require('./components/validate_dataformfeed.js');
    });
};
///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');