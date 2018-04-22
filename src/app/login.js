import 'normalize.css';
import '../assets/styles/index.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import isMobileDevice from './components/detect_mobile.js';
require.config({
  paths: {
    'image-preloader': './components/imagePreloader.min',
  },
});
import preloader from './components/preloader_index.js';
import parallax from './components/parallaxbgmultylayers.js';
import flip from './components/flip.js';

const init = () => {
  require(['image-preloader'], preloader)
    .then(()=> {
      let tabletMth = window.matchMedia('(max-width: 768px)');
      flip.autorizate();
      if(!isMobileDevice()&&!tabletMth.matches)
        parallax.handler();
      require('./components/validate_dataformlogin.js');
    });
};
///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');
