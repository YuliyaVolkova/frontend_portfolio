'use strict';
///*-------------------------------------------
///* scroll to second screen on arrow-click
///*-------------------------------------------
const scrollAbout = (() => {
  let body =document.body,
    sections = [...body.querySelectorAll('.l-section')],
    nextBut = body.querySelector('#next'),
    container = body.querySelector('.l-scroll-parallax-container'),
    arrOffset = sections.map((item) => item.offsetTop);

  function showSection(e) {
    let hash = this.getAttribute('href')||window.location.hash,
      sectionAct = body.querySelector(`.l-section[data-section="${hash.replace(/#/,'')}"`),
      scrollPos = arrOffset[sections.indexOf(sectionAct)]-10;
    animateMove(e, scrollPos);
  }

  const animate = options => {
    let start = performance.now(),
      startPos = container.scrollTop;  
    requestAnimationFrame(function _animate(time) {
    // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
      // текущее состояние анимации
      let progress = options.timing(timeFraction);
      options.move(progress, startPos);
      if (timeFraction < 1) {
        requestAnimationFrame(_animate);
      }
    });
  };

  const animateMove = (e, scrollPos) => {
    e.preventDefault();
    animate({
      duration: 500,
      timing: function(timeFraction) {
        return timeFraction;
      },
      move: function(progress, startPos) {
        container.scrollTop = startPos + (scrollPos- startPos)*(progress);
      },
    });
  };

  const handler = () => {
    nextBut.addEventListener('click', showSection, false);
  };
  return {handler};
})();
export default scrollAbout;