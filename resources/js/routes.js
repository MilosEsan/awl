import FirstStep from './vue/FirstStep.vue';
import SecondStep from './vue/SecondStep.vue';
import ThirdStep from './vue/ThirdStep.vue';

export default {
    mode: 'history',

    routes: [
        { path: '/first-step', name: 'firstStep', component: FirstStep },
        { path: '/second-step', name: 'secondStep', component: SecondStep },
        { path: '/third-step', name: 'thirdStep', component: ThirdStep },
        { path: '/redirect-me', redirect: { name: 'main' } },
        { path: '*', redirect: '/first-step' },
    ]
}