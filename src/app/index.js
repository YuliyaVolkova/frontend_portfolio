import 'normalize.css';
import '../assets/styles/index.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import isMobileDevice from './components/detect_mobile.js';
import Vue from 'vue';
	
//* include to make external svg sprite 
//*** from svg files in '../assets/images/sprites/to_social/'	
//function requireAll(r) { r.keys().forEach(r); }
//requireAll(require.context('../assets/images/sprites/to_sprite/', true));
//----return array----
//--------------------
//var c = require.context('../assets/images/sprites/to_sprite/', true).keys();

///*------------------------------------
///* init app welcome-page
///*-------------------------------------
const init = () => {
  let tabletMth = window.matchMedia('(max-width: 768px)');
  if(window.location.hash==='#login') flip.autorizate();
  else flip.initWelcome();
  if(!isMobileDevice()&&!tabletMth.matches) parallax.handler();
  //*----------------------------------
  //*------js-form-data-validation-----
  //*----------------------------------
  new Vue ({
    el: '#login-form',
    data: {
      login: { value: '',
        error: '',
      },
      password: { value: '',
        error: '',
      },
      checkbox: { value: false,
        error: '',
      },
      radio: { value: 'none',
        error: '',
      },
      attemptSubmit: false,
    },
    computed: {
      wrongLogin() {
        this.login.error = '';
        if(!this.isLogin(this.login.value))
          this.login.error='Логин более 5 символов';
        if(this.login.value==='')
          this.login.error='Вы не ввели логин';
        return this.isLogin(this.login.value)===false||this.login.value==='';
      },
      wrongPassword() {
        this.password.error = '';
        if(!this.isPassword(this.password.value))
          this.password.error='Пароль более 8 символов';
        if(this.password.value==='')
          this.password.error='Вы не ввели пароль';
        return this.isPassword(this.password.value)===false||this.password.value==='';
      },
      wrongCheckbox() {
        return this.checkbox.value===false;
      },
      wrongRadio() {
        return this.radio.value!=='yes';
      },
    },
    methods: {
      isLogin(value) {
        if (value.length > 0 && value.length < 6)
          return false;
        return new RegExp(/^[a-zA-Z\sа-яА-ЯёЁ\s0-9]+$/g).test(value);
      },
      isPassword(value) {
        if (value.length > 0 && value.length < 8)
          return false;
        return new RegExp(/^[a-zA-Z\sа-яА-ЯёЁ\s0-9]+$/g).test(value);
      },
      validateForm(e) {
        this.attemptSubmit = true;
        if(this.wrongLogin||this.wrongPassword||this.wrongCheckbox||this.wrongRadio)
          e.preventDefault();
      },
    },
  });
};

///*------------------------------------------------
///* parallax background-effect - to multiple layers
///*------------------------------------------------
const parallax = (() => {
  let container = document.body.querySelector('#parallax'),
    layers = [...container.children];

  const containerPos = () => {
    //last layer faster move
    let speedLast = layers[layers.length-1].dataset.speed,
      positionTop = window.innerHeight/2*speedLast,
      positionLeft = window.innerWidth/2*speedLast,
      containerStyle = container.style;

    containerStyle.top = `-${positionTop}px`;
    containerStyle.bottom = `-${positionTop}px`;
    containerStyle.left = `-${positionLeft}px`;
    containerStyle.right = `-${positionLeft}px`;
  };

  const move = e => {
    let initialX = window.innerWidth/2 - e.pageX,
      initialY = window.innerHeight/2 - e.pageY;
    layers.forEach((item) => {
      let divider = item.dataset.speed,
        moveX = initialX * divider,
        moveY = initialY * divider,
        itemStyle = item.style;
      itemStyle.transform = `translate(${moveX}px, ${moveY}px)`;
      itemStyle.WebkitTransform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  const handler = () => {
    containerPos();
    window.addEventListener('resize', containerPos, false);
    window.addEventListener('mousemove', move, false);
  };
  return {handler};
})();

///*------------------------------------------------
///* flip-effect - welcome screen
///*------------------------------------------------
const flip = (() => {

  let body = document.body,
    container = body.querySelector('.l-welcome'),
    butLogin = body.querySelector('.c-button#targetLogin'),
    loginTargEl = body.querySelector('.l-login__button'),
    templFace = body.querySelector('#faceBl'),
    templBackFace = body.querySelector('#backFaceBl'),
    containerFace = body.querySelector('.l-face-container'),
    containerBackface = body.querySelector('.l-backface-container');

  const flipHash = e => {
    e.preventDefault();
    if(container.classList.contains('flip')) 
      container.classList.remove('flip');
    else container.classList.add('flip');
    setTimeout(() => {
      loginTargEl.classList.toggle('visually-hidden');
      if(!loginTargEl.classList.contains('visually-hidden')) {
        butLogin.addEventListener('click', flip, false);
      }
    }, 500);
  };

  const flip = e => {
    e.preventDefault();
    if(container.classList.contains('flip'))
      container.classList.remove('flip');
    else container.classList.add('flip');
    setTimeout(() => {
      loginTargEl.classList.toggle('visually-hidden');
      if(!loginTargEl.classList.contains('visually-hidden'))
        butLogin.addEventListener('click', flip, false);
      else {
        let butMain = body.querySelector('.c-form__nav-link#targetMain');
        butMain.addEventListener('click', flipHash, false); 
      }
    }, 500);
  };

  const autorizate = () => {
    containerFace.innerHTML = templBackFace.innerHTML;
    templBackFace.innerHTML = '';
    containerBackface.innerHTML = templFace.innerHTML;
    templFace.innerHTML = '';
    loginTargEl.classList.add('visually-hidden');
    let butMain = body.querySelector('.c-form__nav-link#targetMain');
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

///*------------------------------------
///* parallax background-effect- 1 layer
///*-------------------------------------
/*const prlxMontains = (() => {
  const container = document.body.querySelector('.l-parallax__container');
  var flag = false;

  const bgmove = e => {
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
})();*/

///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');
