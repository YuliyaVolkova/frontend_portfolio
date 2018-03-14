
import 'normalize.css';
import '../assets/styles/index.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();

//* or
//var svgEveryBody = require('svg4everybody');
//svgEveryBody();
	
//* include to make external svg sprite 
//*** from svg files in '../assets/images/sprites/to_social/'	
//*
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../assets/images/sprites/to_sprite/', true));

const prlxMontains = (() => {

  const container = document.body.querySelector('.l-parallax__container');
  var flag = false;

  /// parallax background-effect 
  const bgmove = (e) => {
    if (flag) return;
    let x = -(e.pageX + e.target.offsetLeft)/2.5,
      y = -(e.pageY + e.target.offsetTop)/2.5;

    container.style.backgroundPosition = `${x}px ${y}px`;
    setTimeout(() => flag=false, 420);
  };

  const handler = () => {
    container.addEventListener('mousemove', bgmove, false);
  }; 
  return {handler};
})();

window.onload = prlxMontains.handler;

console.log('It` work %%%!');
