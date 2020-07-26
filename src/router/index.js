import Vue from 'vue';
import VueRouter from 'vue-router';

import Inicio from '../components/Inicio.vue';  // asumiendo que hicimos este componente
import Login from '../components/Login.vue'; 
import NoEncontrada from '../components/NoEncontrada.vue';


Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    // array de objetos
    routes: [
        {
            path: '/', 
            component: Inicio //nombre del componnete q queremos su prpia pag
        },
        {
            path: '/login', 
            component: Login //nombre del componnete q queremos su prpia pag
        },
        {
            path: '*',
            component: NoEncontrada // Asumiendo que hemos construido un componente NoEncontrada, debe ser la última
        },
    ]
})