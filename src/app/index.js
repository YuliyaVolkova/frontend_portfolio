import 'normalize.css';
import '../assets/styles/index.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import isMobileDevice from './components/detect_mobile.js';
//* preloader
require.config({
  paths: {
    'image-preloader': '../build/imagePreloader.min',
  },
});
import preloader from './components/preloader_index.js';
require(['image-preloader'], preloader);
import parallax from './components/parallaxbgmultylayers.js';
import flip from './components/flip.js';

//* include to make external svg sprite 
//*** from svg files in '../assets/images/sprites/to_social/'	
//function requireAll(r) { r.keys().forEach(r); }
//requireAll(require.context('../assets/images/sprites/to_sprite/', true));

const init = () => {
  let tabletMth = window.matchMedia('(max-width: 768px)');
  if(window.location.hash==='#login') flip.autorizate();
  else flip.initWelcome();
  if(!isMobileDevice()&&!tabletMth.matches) parallax.handler();
  require('./components/validate_dataformlogin.js');
};
///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');
