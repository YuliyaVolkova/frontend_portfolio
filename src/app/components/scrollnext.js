const scrollNext = (() => {

  const nextBut = document.body.querySelector('#next'),
    firstSection = document.body.querySelector('.l-section'),
    scrollPos = firstSection.clientHeight - document.body.clientHeight/25;

  const animate = (options) => {

    let start = performance.now();
    requestAnimationFrame(function _animate(time) {
    // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
      // текущее состояние анимации
      let progress = options.timing(timeFraction);
      options.move(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(_animate);
      }
    });
  };

  const showSect = (e) => {
    e.preventDefault();
    animate({
      duration: 500,
      timing: function(timeFraction) {
        return timeFraction;
      },
      move: function(progress) {
        document.documentElement.scrollTop = document.body.scrollTop = (progress)*scrollPos;
      },
    });
  };

  const keyDown = (e) => {
    let tag = e.target.tagName.toLowerCase();
    switch(e.which) {
    case 40:
      if (tag != 'input' && tag != 'textarea') {
        showSect(e);
      }
      break;
    default: return;
    } 
    return false;
  };

  const handler = () => {
    document.addEventListener('keydown', keyDown, false);
    nextBut.addEventListener('click', showSect, false);
  };

  return {handler};
})();

export default scrollNext;