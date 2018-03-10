
import 'normalize.css';
import '../assets/styles/scss/index.main.scss';
	
//* include to make external svg sprite 
//*** from svg files in '../assets/images/sprites/to_social/'	
//*
//function requireAll(r) { r.keys().forEach(r); }
//requireAll(require.context('../assets/images/sprites/to_social/', true));

var prlxMontains = (function() {

  var container = document.body.querySelector('.l-wrapper');

  /// parallax background-effect 
  function bgmove(e) {
    let x = -(e.pageX + this.offsetLeft)/7,
      y = -(e.pageY + this.offsetTop)/7;

    container.style.backgroundPosition = `${x}px ${y}px`;
  }

  function handler() {
    container.addEventListener('mousemove', bgmove, false);
  }

  return {handler};

})();

window.onload = prlxMontains.handler;

console.log('It` work %%%!');
