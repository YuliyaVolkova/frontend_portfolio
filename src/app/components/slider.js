'use strict';
import Vue from 'vue';
Vue.config.productionTip = false;
let dataWorks = [{id:'0001',
  title: 'Сайт школы онлайн Образования',
  technologies: 'HTMl , CSS, JAVASCRIPT',
  url: '../assets/images/content/work-1.png'},
{id:'0002',
  title: 'Работа_2',
  technologies: 'HTMl , Sass, JAVASCRIPT',
  url: '../assets/images/content/work-2.png'},
{id:'0003',
  title: 'Работа_3',
  technologies: 'Pug , Sass, JAVASCRIPT',
  url: '../assets/images/content/work-3.png'},
{id:'0004',
  title: 'Работа_4',
  technologies: 'Pug , Sass, JAVASCRIPT, Vue',
  url: '../assets/images/content/work-4.png'},
];
const slider = new Vue({
  el: '#worksSlider',
  data: {
    dataArr: dataWorks,
    slides: dataWorks.length,
    active: 1,
    prev: dataWorks.length,
    next: 2,
  },
  methods: {
    move(amount) {
      let newActive;
      const newIndex = this.active + amount;
      this.prev = newIndex - 1;
      this.next = newIndex + 1;
      if(newIndex > this.slides) {
        newActive = 1;
        this.prev = this.slides;
        this.next = newActive + 1;
      }
      if(newIndex < 1) {
        newActive = this.slides;
        this.prev = newActive - 1;
        this.next = 1;
      }
      this.prev = (newIndex === 1) ? this.slides : this.prev;
      this.next = (newIndex === this.slides) ? 1 : this.next;
      this.active = newActive || newIndex;      
    },
  },
});
export default slider;