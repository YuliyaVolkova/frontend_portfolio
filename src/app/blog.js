import 'normalize.css';
import '../assets/styles/blog.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import runCodePrettify from './components/code_prettify.js';
import hamburgerNav from './components/c-hamburger.js';

window.onload = function() {
  runCodePrettify();
  scrollBlog.handler();
  hamburgerNav.handler();
};

const scrollBlog = (() => {

  let links = document.body.querySelectorAll('.c-blog__nav-link'),
    sections = [...document.body.querySelectorAll('.c-blog__article')],
    arrOffset = sections.map((item) => item.offsetTop),
    navBlock = document.body.querySelector('.c-blog__aside'),
    header = document.body.querySelector('.l-hero_blog').getBoundingClientRect(),
    unboundForEach = Array.prototype.forEach,
    forEach = Function.prototype.call.bind(unboundForEach),
    siblings = n => [...n.parentElement.children].filter(c=>c!=n);
  var  flag = false;

  
  function getSection(scrollPos)  {
    if(scrollPos<=arrOffset[0]) return 0;
    for (let i = 0; i < arrOffset.length-1; i++) {
      if(scrollPos>arrOffset[i]&&scrollPos<arrOffset[i+1])
        return i;
    }
    return arrOffset.length-1;
  }

  function setActItem(link) {
    let actItem = link.parentElement;
    actItem.classList.add('is-active');
    [].forEach.call(siblings(actItem), function(el) {
      if(el.classList.contains('is-active'))
        el.classList.remove('is-active');
    });
  }

  function checkScroll() {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollPos<=arrOffset[0]+200&&navBlock.classList.contains('pos-fixed'))
      navBlock.classList.remove('pos-fixed');
    if(scrollPos>arrOffset[0]+300&&!navBlock.classList.contains('pos-fixed')) 
      navBlock.classList.add('pos-fixed');

    let dataAttrValue = sections[getSection(scrollPos-100)].getAttribute('data-section'),
      linkAct = document.body.querySelector(`.c-blog__nav-link[href="#${dataAttrValue}"`);
    window.location.hash = dataAttrValue;
    if(flag) return; 
    setActItem(linkAct);
  }

  function showSection(e) {
    if(!window.location.hash) return;
    let hash = e?this.getAttribute('href'):window.location.hash,
      linkAct = document.body.querySelector(`.c-blog__nav-link[href="${hash}"`),
      sectionAct = document.body.querySelector(`.c-blog__article[data-section="${hash.split('#').join('')}"`),
      index = sections.indexOf(sectionAct);
    setActItem(linkAct);
    // window.innerWidth*0.04 - padding top 4%
    var scrollPos = (index === 0)?header.height:(arrOffset[index] + header.height + window.innerWidth*0.04);
    if(e) animateMove(e, scrollPos);
    else 
      document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
  }

  const animate = (options) => {
    flag = true;
    let start = performance.now(),
      startPos = window.pageYOffset || document.documentElement.scrollTop;
    requestAnimationFrame(function _animate(time) {
    // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
        flag = false;}
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
        document.documentElement.scrollTop = document.body.scrollTop = startPos + (scrollPos- startPos)*(progress);
      },
    });
  };

  const handler = () => {

    showSection();
    window.addEventListener('scroll', checkScroll, false);
    forEach(links, function (el) {
      el.addEventListener('click', showSection, false);
    });
  };

  return {handler};
})();