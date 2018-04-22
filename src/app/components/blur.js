'use strict';
///*------------------------------------
///* blur bg to feeds-form
///*-------------------------------------
const blurResize = (() => {
  const body = document.body,
    wrapper = body.querySelector('.c-feeds-form-bg'),
    blurForm = body.querySelector('.c-feeds-blured');
    
  const setBg = () => {
    let offsetTop = -wrapper.offsetTop - 210; //210 ?
    blurForm.style.backgroundPosition = `center ${offsetTop}px`;
  };

  const handler = () => {
    const timer = setInterval(() => {
      if(wrapper.offsetTop) {
        clearInterval(timer);
        setBg();
      }
    }, 50);
    window.addEventListener('resize', setBg, false);
  };

  return {handler};
})();
export default blurResize;