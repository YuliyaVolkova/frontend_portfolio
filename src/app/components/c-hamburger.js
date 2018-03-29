'use strict';

const hamburgerNav = (function() {

  let body = document.body,
    component = body.querySelector('.c-hamburger-nav'),
    button = component.querySelector('#openOverlay'),
    overlay,
    template = component.querySelector('#hamburgerTemplate');

  const createOverlay = () => {
    overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = template.innerHTML;
  };
    
  const isEsc = e => {
    switch(e.which) {
    case 27: closeOverlay(e);
      break;       
    default: return;
    }
    return false;
  };   

  function insertOverlay() {
    button.removeEventListener('animationend', insertOverlay, false);
    body.appendChild(overlay);
    button.style.transform = 'scale(0.001)';
    button.classList.remove('animate');
    let close = overlay.querySelector('#closeOverlay'),
      homeLink = overlay.querySelector('.c-hamburger-nav__link[href="#"]').parentElement;
    homeLink.addEventListener('click', closeOverlay, false);  
    close.addEventListener('click', closeOverlay, false);
    body.addEventListener('keydown', isEsc, false);
  }

  function openOverlay(e) {
    e.preventDefault();	
    button.classList.add('animate');
    button.addEventListener('animationend', insertOverlay, false);
  }

  function removeClassAnimate() {
    this.removeEventListener('animationend', removeClassAnimate, false);
    button.style.transform = 'scale(1.1)';
    overlay.remove();
    this.classList.remove('animate');
    button.addEventListener('click', openOverlay, false);
  }
	
  function closeOverlay(e) {
   
    e.preventDefault();
    let close = overlay.querySelector('#closeOverlay');
    close.removeEventListener('click', closeOverlay, false);
    body.removeEventListener('keydown', isEsc, false);
    close.classList.add('animate');
    close.addEventListener('animationend', removeClassAnimate, false);
  }

  const handler = () => {
    createOverlay();
    button.addEventListener('click', openOverlay, false);
  };

  return {handler};
})();

export default hamburgerNav;
