import Vue from 'vue';
import VueRouter from 'vue-router';

import Inicio from '@/components/Inicio.vue';  // asumiendo que hicimos este componente
import Login from '@/components/Login.vue'; 
import NoEncontrada from '@/components/NoEncontrada.vue';
import Categoria from '@/components/Categoria.vue';
import Cualquiera from '@/components/Cualquiera.vue';


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
            component: Login
        },
        {
            path: '/:cualquiera', 
            component: Cualquiera
        },        
        {
            path: '/categoria/:nombre', 
            component: Categoria,
            /*rutas anidadas
            children: [
                {

                }
            ]*/
        },
        {
            path: '*',
            component: NoEncontrada // Asumiendo que hemos construido un componente NoEncontrada, debe ser la última
        },
    ]
})