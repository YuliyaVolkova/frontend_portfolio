
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
//function requireAll(r) { r.keys().forEach(r); }
//requireAll(require.context('../assets/images/sprites/to_sprite/', true));

const init = () => {
  prlxMontains.handler();
  flip.handler();
};

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

const flip = (() => {

  const container = document.body.querySelector('.l-welcome'),
    butLogin = document.body.querySelector('.c-button#targetLogin'),
    loginTargEl = document.body.querySelector('.l-login__button'),
    butMain = document.body.querySelector('.c-form__nav-link#targetMain');

  var flag = false;

  /// flip-effect 
  const openLogin = (e) => {
    e.preventDefault();
    if (flag) return;
    container.classList.add('flip');
    setTimeout(() => flag=false, 50);
    loginTargEl.classList.add('visually-hidden');
    butMain.addEventListener('click', openMain, false);
  };

  const openMain = (e) => {
    e.preventDefault();
    if (flag) return;
    container.classList.remove('flip');
    setTimeout(() => loginTargEl.classList.remove('visually-hidden'), 500);
    setTimeout(() => flag=false, 50);
  };

  const handler = () => {
    butLogin.addEventListener('click', openLogin, false);
  }; 
  return {handler};
})();

window.onload = init();
console.log('It` work %%%!');
