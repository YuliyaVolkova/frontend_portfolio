import 'normalize.css'; 
import './styles/_base.scss';
import svg4everybody from 'svg4everybody';
svg4everybody();
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index.js';
import router from './router.js';

Vue.use(VueAxios, axios);

new Vue({
  el: '#admin-app',
  store,
  router,
  render: h => h(App),
});