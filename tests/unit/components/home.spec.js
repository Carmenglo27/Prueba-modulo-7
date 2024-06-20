import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

describe('Pruebas rutas', () => {
    test('Prueba1: probando que exista componente o vista HomeView', async () => {
        const router = createRouter({
            history: createRouter(),
            routes: [{
                path:'/',
                name: 'HomeView',
                component: HomeView
            }],
        })
        router.push('/')
        await router.isReady()

        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }   
        })
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })

    test('Prueba 2: probando que exista componente o vista About', async () => {
        const router = createRouter({
           history: createWebHistory(),
           routes:[{
                path: '/about',
                name: '/About',
                component: AboutView            
           }],
        })
        router.push('/about')
        await router.isReady()

        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }            
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })
})