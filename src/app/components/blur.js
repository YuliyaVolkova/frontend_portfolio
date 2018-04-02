'use strict';
///*------------------------------------
///* blur bg to feeds-form
///*-------------------------------------
const blurResize = (() => {
  let body = document.body,
    wrapper = body.querySelector('.c-feeds-form-bg'),
    blurForm = body.querySelector('.c-feeds-blured');
    
  const setBg = () => {
    let offsetTop = -wrapper.offsetTop - 210; //210 ?
    blurForm.style.backgroundPosition = `center ${offsetTop}px`;
  };

  const handler = () => {
    setBg();
    window.addEventListener('resize', setBg, false);
  };

  return {handler};
})();
export default blurResize;