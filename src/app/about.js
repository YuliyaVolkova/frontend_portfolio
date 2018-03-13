import 'normalize.css';
import '../assets/styles/about.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();

import scrollNext from './components/scrollnext.js';

window.onload = scrollNext.handler;
console.log('It` work %%%!');