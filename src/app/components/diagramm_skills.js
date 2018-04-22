'use strict';
import axios from 'axios';
const diagrammsSkills = (() => {
  const body = document.body,
    container = body.querySelector('.l-scroll-parallax-container'),
    containerSkills = body.querySelector('.c-skills-card__container'),
    parallaxContent = body.querySelector('.parallax__content'),
    skillsWrapper = body.querySelector('.l-main__column-two');
  let firstScrHeight,
    colSecondTop,
    arrItems = new Array(),
    animated = false, scrollPos = 0;

  class Skill {
    constructor(options) {
      this.svgns = 'http://www.w3.org/2000/svg';
      this.svg = document.createElementNS(this.svgns, 'svg');
      this.width = options.width||112;
      this.height = options.height||this.width;
      this.radius = this.width / 3;
      this.percent = options.percent;
      this.strokeDasharray = 2 * Math.PI * this.radius;
      this.svg.setAttribute('width', this.width);
      this.svg.setAttribute('height', this.height);
      this.svg.setAttribute('opacity', options.percent/100);
      this.svg.classList.add('svg_skill-diagr');
      this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
      this.baseCircle = this.createCircle('rgb(0, 191, 165)', true);
      this.bgCircle = this.createCircle('#ccc');
      this.add(options.container, options.title);   
    }

    createCircle(color, isBase = false) {
      const circle = document.createElementNS(this.svgns, 'circle');
      const cx = this.width / 2;
      const cy = this.height / 2;
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', this.radius);
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', color);
      circle.setAttribute('stroke-width', '20');
      if (isBase) {
        circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
        circle.setAttribute('stroke-dasharray', this.strokeDasharray);
        circle.setAttribute('stroke-dashoffset', this.strokeDasharray);
      }
      return circle;
    }

    add(container, title) {
      const item = document.createElement('div');
      item.classList.add('c-skills-card__skill-item');
      const titleSvg = document.createElement('div');
      titleSvg.classList.add('c-skills-card__skill-title');
      titleSvg.textContent = title;
      this.svg.appendChild(this.bgCircle);
      this.svg.appendChild(this.baseCircle);
      item.appendChild(titleSvg);
      item.appendChild(this.svg);
      container.appendChild(item);
      return this;
    }

    draw(progress) {  
      this.baseCircle.setAttribute(
        'stroke-dashoffset',
        (1 - progress * this.percent/100) * this.strokeDasharray
      );
    }
  }

  function animate(options) {
    let start = performance.now();
    requestAnimationFrame(function _animate(time) {
    // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
        animated = false;
      }
      // текущее состояние анимации
      let progress = options.timing(timeFraction);
      options.draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(_animate);
      }
    });
  }
  function createExSkills(data) {
    const width = 145;
    const titles = ['Frontend', 'Workflow', 'Backend'];
    for (var i = 0; i < 3; i++) {
      arrItems[i] = new Array();
      const group = document.createElement('li');
      const groupTitle = document.createElement('div');
      const skillsContainer = document.createElement('div');
      group.classList.add('c-skills-card__group');
      groupTitle.classList.add('c-skills-card__group-title');
      skillsContainer.classList.add('c-skills-card__group-content');
      groupTitle.textContent = titles[i];
      group.appendChild(groupTitle);
      group.appendChild(skillsContainer);
      containerSkills.appendChild(group);
      let filter = data.filter(x=> x.type===(i+1));    
      for (var j = 0; j <= filter.length - 1; j++) {
        arrItems[i][j] = new Skill({width: width, container: skillsContainer, title: filter[j].name, percent: filter[j].percents});
      }
    }
  }

  function scrollAnimate() {
    if(animated) return;
    let newPos = this.scrollTop;
    if(newPos<=scrollPos) {
      scrollPos = newPos;
      return;
    }
    scrollPos = newPos;
    firstScrHeight = parallaxContent.offsetTop;
    colSecondTop = skillsWrapper.offsetTop;
    if(scrollPos<((firstScrHeight+colSecondTop)*3/4)||scrollPos>(firstScrHeight+colSecondTop)*6/7)
      return;
    animated = true;
    setTimeout(function() {animate({
      duration: 2000,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
        for (var i = 0; i < arrItems.length; i++) {
          for (var j = 0; j < arrItems[i].length; j++) {
            arrItems[i][j].draw(progress);
          }
        }
      },
    });}, 50);
  }
  const init = () => {
    axios
      .get('/json/skills.json')
      .then(rs => {
        createExSkills(rs.data);
        container.addEventListener('scroll', scrollAnimate, false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return {init};
})();
export default diagrammsSkills;