import AspenWhiteLabel1 from './vue/AspenWhiteLabel1.vue'
import AspenWhiteLabel2 from './vue/AspenWhiteLabel2.vue'
import AspenWhiteLabel3 from './vue/AspenWhiteLabel3.vue'

export default {
    mode: 'history',

    routes: [{
            path: "/aspen_white_label_1",
            component: AspenWhiteLabel1
        },
        {
            path: "/aspen_white_label_2",
            component: AspenWhiteLabel2
        },
        {
            path: "/aspen_white_label_3",
            component: AspenWhiteLabel3
        },
        { path: '/redirect-me', redirect: { name: 'main' } },
        { path: '*', redirect: '/aspen_white_label_1' }
    ]
}