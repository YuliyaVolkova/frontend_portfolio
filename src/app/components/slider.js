'use strict';
import Vue from 'vue';
import axios from 'axios';
Vue.config.productionTip = true;
const slider = new Vue({
  el: '#worksSlider',
  data() {
    return {
      dataArrPrev: [],
      dataArrNext: [],
      dataArrActive: [],
      slides: Number,
      classIsRefPrev: Number,
      classIsRefNext: Number,
      indexPrev: Number,
      indexNext: Number,
      isReversingPrev: false,
      isReversingNext: false,
      prevNodes: [],
      nextNodes: [],
      isSet: true,
      activeSlide: 1,
    };
  },
  mounted() {
    axios
      .get('/json/works.json')
      .then(rs => {
        let dataWorks = rs.data,
          arrActive = dataWorks.slice(),
          arrNext = dataWorks.slice(), //copy to new Array
          arrPrev = dataWorks.reverse();
        arrNext = arrNext.concat(arrNext.shift());
        this.dataArrPrev = arrPrev;
        this.dataArrNext = arrNext;
        this.dataArrActive = arrActive;
        this.slides = dataWorks.length;
        this.classIsRefPrev = this.slides;
        this.classIsRefNext = this.slides;    
      })
      .then(() => {
        const body = document.body;
        this.prevNodes = body.querySelectorAll('.img-prev');
        this.nextNodes = body.querySelectorAll('.img-next'); 
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    checkActiveClass(index) {
      if(index > this.slides)
        index = 1;
      if(index < 1)
        index = this.slides;
      return index;   
    },
    removeRefClass() {
      this.indexPrev = this.classIsRefPrev - 1;
      this.indexNext = this.classIsRefNext - 1;
      this.classIsRefPrev = this.slides + 1; //remove is-ref class
      this.classIsRefNext = this.slides + 1; //remove is-ref class
    },
    checkIndSlide(index) {
      if((!index) || index > this.slides - 1) index = 0; 
      else if((index) && (index <= 0)) index = this.slides - 1;
      return index;
    },

    changeOrder() {
      this.indexPrev = this.checkIndSlide(this.indexPrev);
      this.indexNext = this.checkIndSlide(this.indexNext);
      this.classIsRefPrev = this.indexPrev + 1;
      this.classIsRefNext = this.indexNext + 1;
      this.prevNodes[this.indexPrev].style.order = '1';
      this.nextNodes[this.indexNext].style.order = '1';
      this.indexPrev++;
      this.indexNext++;
      this.indexPrev = this.checkIndSlide(this.indexPrev);
      this.indexNext = this.checkIndSlide(this.indexNext);
      for(var i = 2; i <= this.slides; i++) {
        this.prevNodes[this.indexPrev].style.order = i;
        this.nextNodes[this.indexNext].style.order = i;
        this.indexPrev++;
        this.indexNext++;
        this.indexPrev = this.checkIndSlide(this.indexPrev);
        this.indexNext = this.checkIndSlide(this.indexNext);    
      }
      this.isSet = false;
      setTimeout(() => this.isSet = true, 16);  
    },
    toPrev() {
      this.removeRefClass();
      this.indexPrev++;
      this.indexNext--;     
      this.activeSlide = this.checkActiveClass(this.activeSlide-1);    
      this.isReversingNext = true;
      this.isReversingPrev = false;
      this.changeOrder();
    },
    toNext() { 
      this.removeRefClass();
      this.indexPrev--;
      this.indexNext++;
      this.activeSlide = this.checkActiveClass(this.activeSlide+1);
      this.isReversingNext = false; 
      this.isReversingPrev = true;
      this.changeOrder();   
    },
  },
});
export default slider;