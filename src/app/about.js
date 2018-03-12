import 'normalize.css';
import '../assets/styles/scss/about.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();

// OPS
/*var scrollPage = (function() {

  var screen = 0,
    container = document.body.querySelector('.l-wrapper'),
    pages = container.querySelectorAll('.l-section'),
    nextBut = container.querySelector('#next');
    
  function checkIndex(ind) {

    var maxIndSect = pages.length -1;
    if(ind < 0) ind = 0;
    else if(ind > maxIndSect) ind = maxIndSect;
    return ind;
  }

  /// move to section use css transform
  function move(scr) {

    var pos = -scr*100 + '%';
        
    // Code for Chrome, Safari, Opera
    container.style.WebkitTransform = 'translateY(' + pos + ')'; 
    // Code for IE9
    container.style.msTransform = 'translateY(' + pos + ')';
    // Standard syntax
    container.style.transform = 'translateY(' + pos + ')';
  }


  function showSect(ind) {

    screen = checkIndex(ind);
    move(screen); 
    return false;
  }


  function keyDown(e) {

    var tag = e.target.tagName.toLowerCase();

    switch(e.which) {
    case 40:
      if (tag != 'input' && tag != 'textarea') {
        screen++; 
        showSect(screen);
      }
      break;
    default: return;
    }
      
    return false;
  }

  function clickMenu(e) {

    e.preventDefault();
    showSect(1);
  }

    
  function handler() {
    
    document.addEventListener('keydown', keyDown, false);
     
    nextBut.addEventListener('click', clickMenu, false);
  
  }

  return {handler};

})();

window.onload = scrollPage.handler;*/
console.log('It` work %%%!');



