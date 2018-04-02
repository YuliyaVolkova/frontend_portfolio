'use strict';
///*------------------------------------
///* scroll blog-articles
///*-------------------------------------
const scrollBlog = (() => {
  let body = document.body,
    sections = [...body.querySelectorAll('.c-blog__article')],
    container = body.querySelector('.l-scroll-parallax-container'),
    arrOffset = sections.map((item) => item.offsetTop),
    navBlock = body.querySelector('#absoluteNav'),
    links = [...navBlock.querySelectorAll('.c-blog__nav-link')],
    tabletButton = navBlock.querySelector('.c-blog__menu-swipe'),
    firstScrHeight = body.querySelector('.parallax__content').offsetTop,
    header = body.querySelector('.l-hero_blog').getBoundingClientRect(),
    fixedClone,
    tabletMth = window.matchMedia('(max-width: 768px)'),
    siblings = n => [...n.parentElement.children].filter(c=>c!=n);
  var  frAnimated = false;

  function createFixNav() {
    fixedClone = document.createElement('div');
    fixedClone.id = 'fixedNav';
    fixedClone.classList.add('c-blog__aside');
    fixedClone.classList.add('visually-hidden');
    fixedClone.classList.add('pos-fixed');
    fixedClone.innerHTML = navBlock.innerHTML;
    body.appendChild(fixedClone);
    let links = [...fixedClone.querySelectorAll('.c-blog__nav-link')];
    links.forEach(function(el) {
      el.addEventListener('click', showSection, false);
    });
    //*-- for portable devices--
    if(tabletMth.matches) {
      let tabletBut = fixedClone.querySelector('.c-blog__menu-swipe');
      tabletBut.addEventListener('click', mobile, false);
    }
  }

  const getSection = scrollPos =>  {
    if(scrollPos<=arrOffset[0]) return 0;
    for (let i = 0; i < arrOffset.length-1; i++) {
      if(scrollPos>arrOffset[i]&&scrollPos<arrOffset[i+1])
        return i;
    }
    return arrOffset.length-1;
  };

  const setActItem = links => {
    links.forEach(function(el) {
      let actItem = el.parentElement;
      actItem.classList.add('is-active');
      [].forEach.call(siblings(actItem), function(it) {
        if(it.classList.contains('is-active'))
          it.classList.remove('is-active');
      });
    });
  };

  const checkScroll = () => {
    let scrollPos = container.scrollTop;
    if(fixedClone&&scrollPos<=arrOffset[0]+firstScrHeight&&navBlock.classList.contains('visually-hidden')) {
      if(!tabletMth.matches||!fixedClone.classList.contains('animateOpen')) {
        fixedClone.classList.add('visually-hidden');
        navBlock.classList.remove('visually-hidden');
      }
    }
    //* header.width*0.04 - padding-top
    if(fixedClone&&scrollPos>firstScrHeight-header.width*0.04) {
      navBlock.classList.add('visually-hidden');
      if(fixedClone.classList.contains('visually-hidden'))
        fixedClone.classList.remove('visually-hidden');
    }
    let dataSection = sections[getSection(scrollPos-header.width*0.04)].dataset.section,
      linksAct = [...body.querySelectorAll(`.c-blog__nav-link[href="#${dataSection}"`)];
    //* then after animation: frAnimated = true 
    if(!frAnimated) {
      window.location.hash = dataSection; 
      setActItem(linksAct);
    }
    //* set default frAnimated
    frAnimated = false;
  };

  const deleteAnimatClasses = () => {
    fixedClone.classList.remove('animateOpen');
    fixedClone.removeEventListener('animationend', deleteAnimatClasses, false);
  };

  function showSection(e) {
    if(!window.location.hash) return;
    let hash = e?this.getAttribute('href'):window.location.hash,
      sectionAct = body.querySelector(`.c-blog__article[data-section="${hash.replace(/#/,'')}"`),
      linksAct = [...body.querySelectorAll(`.c-blog__nav-link[href="${hash}"`)],
      index = sections.indexOf(sectionAct);
    setActItem(linksAct);
    window.location.hash = sectionAct.dataset.section;
    let scrollPos = (index === 0)?firstScrHeight:(firstScrHeight + arrOffset[index] + header.width*0.05);
    container.removeEventListener('scroll', checkScroll, false);

    if(e) {
      if(tabletMth.matches) {
        fixedClone.classList.add('animateClose');
        fixedClone.addEventListener('animationend', deleteAnimatClasses, false);
      }
      animateMove(e, scrollPos);
    }
    else 
      container.scrollTop = scrollPos;
  }

  const animate = (options) => {
    frAnimated = true;
    let start = performance.now(),
      startPos = container.scrollTop;
    requestAnimationFrame(function _animate(time) {
    // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
        container.addEventListener('scroll', checkScroll, false);
      }
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
      duration: 700,
      timing: function(timeFraction) {
        return timeFraction;
      },
      move: function(progress, startPos) {
        container.scrollTop = startPos + (scrollPos- startPos)*(progress);
      },
    });
  };

  const mobile = e => {
    e.preventDefault();
    navBlock.classList.add('visually-hidden');
    fixedClone.classList.remove('visually-hidden');
    fixedClone.classList.remove('animateClose');
    fixedClone.classList.add('overlay-mobile');
    fixedClone.classList.add('animateOpen');     
  };

  const init = () => {
    createFixNav();
    showSection();
    container.addEventListener('scroll', checkScroll, false);
    links.forEach(function(el) {
      el.addEventListener('click', showSection, false);
    });
    tabletButton.addEventListener('click', mobile, false);
  };
  return {init};
})();
export default scrollBlog;