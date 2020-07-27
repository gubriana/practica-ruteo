import Vue from 'vue';
import VueRouter from 'vue-router';

import Inicio from '@/components/Inicio.vue';  // asumiendo que hicimos este componente
import Login from '@/components/Login.vue'; 
import NoEncontrada from '@/components/NoEncontrada.vue';
import Categoria from '@/components/Categoria.vue';
import Restoran from '@/components/Restoran.vue';
import About from '@/components/About.vue';
import Reviews from '@/components/Reviews.vue';
import Images from '@/components/Images.vue';


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
            path: '/:restoran', 
            component: Restoran,
            children: [
                {
                    path: '', 
                    component: About
                },
                {
                    path: 'reviews', 
                    component: Reviews
                },
                {
                    path: 'images', 
                    component: Images
                },
            ]
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