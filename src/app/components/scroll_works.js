'use strict';
///*------------------------------------
///* page my_works: move accros sections
///*------------------------------------
const scrollWorks = (() => {

  let body = document.body,
    sections = [...body.querySelectorAll('.l-section')],
    toNextBut = body.querySelector('#next'),
    toFirstBut = body.querySelector('#first'),
    arrOffset = sections.map((item) => item.offsetTop),
    container = body.querySelector('.l-scroll-parallax-container');

  function showSection(e) {
    let hash = this.getAttribute('href')||window.location.hash,
      sectionAct = body.querySelector(`.l-section[data-section="${hash.replace(/#/,'')}"`),
      scrollPos = arrOffset[sections.indexOf(sectionAct)];
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
      duration: 900,
      timing: function(timeFraction) {
        return timeFraction;
      },
      move: function(progress, startPos) {
        container.scrollTop = startPos + (scrollPos- startPos)*(progress);
      },
    });
  };

  const handler = () => {
    toNextBut.addEventListener('click', showSection, false);
    toFirstBut.addEventListener('click', showSection, false);
  };

  return {handler};
})();
export default scrollWorks;