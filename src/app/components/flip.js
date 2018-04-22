'use strict';
///*------------------------------------------------
///* flip-effect - welcome screen
///*------------------------------------------------
const flip = (() => {

  const body = document.body,
    container = body.querySelector('.l-welcome'),
    butToLoginWrapper = body.querySelector('#targetLogin'),
    butToLogin = butToLoginWrapper.children[0],
    butToMain = container.querySelector('#targetMain');

  const flipLogin = e => {
    e.preventDefault();
    if(container.classList.contains('flip')) 
      container.classList.remove('flip');
    else container.classList.add('flip');
    setTimeout(() => {
      butToLoginWrapper.classList.toggle('visually-hidden');
      if(!butToLoginWrapper.classList.contains('visually-hidden')) {
        butToLogin.addEventListener('click', flip);
      }
    }, 500);
  };

  const flip = e => {
    e.preventDefault();
    if(container.classList.contains('flip'))
      container.classList.remove('flip');
    else container.classList.add('flip');
    setTimeout(() => {
      butToLoginWrapper.classList.toggle('visually-hidden');
      if(!butToLoginWrapper.classList.contains('visually-hidden'))
        butToLogin.addEventListener('click', flip);
      else {
        butToMain.addEventListener('click', flipLogin); 
      }
    }, 500);
  };

  function autorizate() {
    butToLoginWrapper.classList.add('visually-hidden');
    butToMain.addEventListener('click', flipLogin);
  }

  const initMain = () => { 
    butToLogin.addEventListener('click', flip);
  };
  return {initMain, autorizate};
})();
export default flip;