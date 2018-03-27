
import 'normalize.css';
import '../assets/styles/index.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import isMobileDevice from './components/detect_mobile.js';
	
//* include to make external svg sprite 
//*** from svg files in '../assets/images/sprites/to_social/'	
//*
//function requireAll(r) { r.keys().forEach(r); }
//requireAll(require.context('../assets/images/sprites/to_sprite/', true));

const init = () => {
  let tabletMth = window.matchMedia('(max-width: 768px)');
  if(window.location.hash==='#login') flip.autorizate();
  else flip.initWelcome();
  if(!isMobileDevice()&&!tabletMth.matches) parallax.handler();
};
///*------------------------------------
///* parallax background-effect- 1 layer
///*--------------------------------------

const prlxMontains = (() => {
  const container = document.body.querySelector('.l-parallax__container');
  var flag = false;

  const bgmove = (e) => {
    if (flag) return;
    let x = -(e.pageX + e.target.offsetLeft)/2.5,
      y = -(e.pageY + e.target.offsetTop)/2.5;

    container.style.backgroundPosition = `${x}px ${y}px`;
    setTimeout(() => flag=false, 420);
  };

  const init = () => {
    container.addEventListener('mousemove', bgmove, false);
  }; 
  return {init};
})();
///*------------------------------------------------
///* parallax background-effect - to multiple layers
///*------------------------------------------------
const parallax = (() => {
  let container = document.body.querySelector('#parallax'),
    layers = [...container.children];

  const containerPos = () => {
    //last layer faster move
    let positionTop = window.innerHeight/2*layers[layers.length-1].dataset.speed,
      positionLeft = window.innerWidth/2*layers[layers.length-1].dataset.speed;

    container.style.top = `-${positionTop}px`;
    container.style.bottom = `-${positionTop}px`;
    container.style.left = `-${positionLeft}px`;
    container.style.right = `-${positionLeft}px`;
  };

  const move = (e) => {
    let initialX = window.innerWidth/2 - e.pageX,
      initialY = window.innerHeight/2 - e.pageY;
    layers.forEach((item) => {
      let divider = item.dataset.speed,
        moveX = initialX * divider,
        moveY = initialY * divider;
      item.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  const handler = () => {
    containerPos();
    window.addEventListener('resize', containerPos, false);
    window.addEventListener('mousemove', move, false);
  };
  return {handler};
})();
//-----------------
const flip = (() => {

  const container = document.body.querySelector('.l-welcome'),
    butLogin = document.body.querySelector('.c-button#targetLogin'),
    loginTargEl = document.body.querySelector('.l-login__button'),
    templFace = document.body.querySelector('#faceBl'),
    templBackFace = document.body.querySelector('#backFaceBl'),
    containerFace = document.body.querySelector('.l-face-container'),
    containerBackface = document.body.querySelector('.l-backface-container');

  const flipHash = (e) => {
    e.preventDefault();
    if(container.classList.contains('flip')) 
      container.classList.remove('flip');
    else container.classList.add('flip');
    setTimeout(() => {
      loginTargEl.classList.toggle('visually-hidden');
      if(!loginTargEl.classList.contains('visually-hidden')) {
        butLogin.addEventListener('click', flip, false);
      } }
      , 500);
  };

  const flip = (e) => {
    e.preventDefault();
    if(container.classList.contains('flip'))
      container.classList.remove('flip');
    else container.classList.add('flip');
    setTimeout(() => {
      loginTargEl.classList.toggle('visually-hidden');
      if(!loginTargEl.classList.contains('visually-hidden'))
        butLogin.addEventListener('click', flip, false);
      else {
        var butMain = document.body.querySelector('.c-form__nav-link#targetMain');
        butMain.addEventListener('click', flipHash, false); 
      }
    }
      , 500);
  };

  const autorizate = () => {
    containerFace.innerHTML = templBackFace.innerHTML;
    templBackFace.innerHTML = '';
    containerBackface.innerHTML = templFace.innerHTML;
    templFace.innerHTML = '';
    loginTargEl.classList.add('visually-hidden');
    var butMain = document.body.querySelector('.c-form__nav-link#targetMain');
    butMain.addEventListener('click', flipHash, false);
  };

  const initWelcome = () => { 
    containerFace.innerHTML = templFace.innerHTML;
    templFace.innerHTML = '';
    containerBackface.innerHTML = templBackFace.innerHTML;
    templBackFace.innerHTML = '';
    if(!loginTargEl.classList.contains('visually-hidden'))
      butLogin.addEventListener('click', flip, false);
  };

  return {initWelcome, autorizate};
})();

window.onload = init;
console.log('It` work %%%!');
