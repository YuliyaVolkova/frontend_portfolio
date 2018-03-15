import 'normalize.css';
import '../assets/styles/about.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();

import scrollNext from './components/scrollnext.js';
import diagrammsSkills from './components/diagramm_skills.js';

window.onload = function() {

  scrollNext.handler();
  diagrammsSkills.init();
};
console.log('It` work %%%!');