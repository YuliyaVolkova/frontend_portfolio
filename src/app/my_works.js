console.log('my_works.js');
import 'normalize.css'; 
import '../assets/styles/my_works.main.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import scrollNext from './components/scrollnext.js';

window.onload = scrollNext.handler;
console.log('It` work %%%!');