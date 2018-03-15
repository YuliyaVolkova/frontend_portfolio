
const diagrammsSkills = (() => {
  const data = [{groupTitle: 'Frontend',
      skills: [{skillTitle: 'HTML5 &CSS3', percent: '0.92'},
        {skillTitle: 'Sass &Pug', percent: '0.85'},
        {skillTitle: 'JavaScript &jQuery', percent: '0.85'}]},
    {groupTitle: 'Backend', 
      skills: [{skillTitle: 'PHP', percent: '0.3'},
        {skillTitle: 'Node.js &npm', percent: '0.5'},
        {skillTitle: 'mySQL', percent: '0.4'},
        {skillTitle: 'Mongo.db', percent: '0.6'}]},
    {groupTitle: 'Workflow', 
      skills: [{skillTitle: 'Git', percent: '0.92'},
        {skillTitle: 'Webpack', percent: '0.75'},
        {skillTitle: 'Gulp', percent: '0.80'}]},
    ],
    containerSkills = document.querySelector('.c-skills-card__container'),
    skillsSectHeight = document.querySelector('.l-content__wrapper').clientHeight,
    firstSectHeight = document.querySelector('.l-hero').clientHeight,
    arrItems = new Array();

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
      this.svg.setAttribute('opacity', options.percent);
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
        (1 - progress * this.percent) * this.strokeDasharray
      );
    }
  }

  function animate(options) {
    let start = performance.now();

    requestAnimationFrame(function _animate(time) {
    // timeFraction от 0 до 1
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
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
    for (var i = 0; i <= data.length - 1; i++) {
      arrItems[i] = new Array();
      const group = document.createElement('li');
      const groupTitle = document.createElement('div');
      const skillsContainer = document.createElement('div');
      group.classList.add('c-skills-card__group');
      groupTitle.classList.add('c-skills-card__group-title');
      skillsContainer.classList.add('c-skills-card__group-content');
      groupTitle.textContent = data[i].groupTitle;
      group.appendChild(groupTitle);
      group.appendChild(skillsContainer);
      containerSkills.appendChild(group);
      for (var j = 0; j <= data[i].skills.length - 1; j++) {
        arrItems[i][j] = new Skill({width: width, container: skillsContainer, title: data[i].skills[j].skillTitle, percent: data[i].skills[j].percent});
      }
    }
  }

  function scrollAnimate(e) {
    const pageYOffset = e.currentTarget.pageYOffset;
    if(pageYOffset>skillsSectHeight||pageYOffset>firstSectHeight-400&&pageYOffset<skillsSectHeight) return;
    setTimeout(function() {animate({
      duration: 1000,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
        for (var i = 0; i <= arrItems.length - 1; i++) {
          for (var j = 0; j <= arrItems[i].length - 1; j++) {
            arrItems[i][j].draw(progress);
          }
        }
      },
    });}, 50);
  }

  function init() {
    createExSkills(data);
    window.addEventListener('scroll', scrollAnimate, false);
  }
  return {init};
})();

export default diagrammsSkills;