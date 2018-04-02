'use strict';
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
    const butMain = body.querySelector('.c-form__nav-link#targetMain');
    butMain.addEventListener('click', flipHash);
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
export default flip;