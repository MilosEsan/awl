require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';


import Vue from 'vue';
import store from './vue/store/index'

import VueRouter from 'vue-router';
Vue.use(VueRouter);


import routes from './routes.js';

//layout
import App from './vue/App.vue'


const app = new Vue({
    router: new VueRouter(routes),
    store,
    components: { App, }
}).$mount('#app');