import 'normalize.css';
import '../assets/styles/blog.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import runCodePrettify from './components/code_prettify.js';
import hamburgerNav from './components/c-hamburger.js';
require.config({
  paths: {
    'image-preloader': './components/build/imagePreloader.min',
  },
});
import preloader from './components/preloader_index.js';
import scrollBlog from './components/scroll_blog.js';
///*------------------------------------
///* init app welcome-page
///*-------------------------------------
const init = () => {
  require(['image-preloader'], preloader)
    .then(()=> {
      runCodePrettify();
      scrollBlog.init();
      hamburgerNav.handler();
    });
};
///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');