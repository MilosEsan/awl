require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';


import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);


import routes from './routes.js';

//layout
import App from './vue/App.vue'
//pages
import AspenWhiteLabel1 from './vue/AspenWhiteLabel1.vue'
import AspenWhiteLabel2 from './vue/AspenWhiteLabel2.vue'
import AspenWhiteLabel3 from './vue/AspenWhiteLabel3.vue'


const app = new Vue({
    router: new VueRouter(routes),
    components: { App, AspenWhiteLabel1, AspenWhiteLabel2, AspenWhiteLabel3 }
}).$mount('#app');