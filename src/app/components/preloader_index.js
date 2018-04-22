'use strict';
const preloader = (ImagePreloader) => {
  const preloader = new ImagePreloader(),
    body = document.body,
    imgs = [...body.querySelectorAll('img')],
    imgUrls = imgs.map(x => x.src),
    bgUrls = ['./assets/images/decor/bg/mountains.jpg'],
    loader = body.querySelector('#loader'),
    textContainer = loader.querySelector('#preloaderText'),
    urls = [...imgUrls, ...bgUrls],
    circles = [...loader.querySelectorAll('circle')].reverse(),
    total = urls.length;
  let counter = 0;

  const init = () => {
    circles.forEach(function(el) {
      let circleLength = (2*Math.PI*el.getAttributeNode('r').nodeValue).toFixed(4);
      el.setAttribute('stroke-dasharray', `${circleLength}`);
      el.setAttribute('stroke-dashoffset', `${circleLength}`);
      el.style.opacity = '1';
    });
    preloader.preload(urls)
      .then(() => {
        body.querySelector('.l-wrapper').style.display = 'block';
        body.classList.add('loaded');
        imgs.forEach(function(el) {
          el.style.display = 'block';
        });
      });
  };

  preloader.onProgress = function() {
    textContainer.textContent = `${parseInt(++counter/total*100)}`;
    circles.forEach(function(el, ind) {
      let d = 2 * Math.PI * el.getAttributeNode('r').nodeValue;
      let c = (d*(1- (counter-1)/(total-1))).toFixed(4);
      el.setAttribute('stroke-dashoffset', `${c * (ind + 1) * 0.7}`);
    }); 
  };
  return init();
};
export default preloader;