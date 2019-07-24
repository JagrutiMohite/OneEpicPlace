import Vue from 'vue'
import Router from 'vue-router'

//1. shaired views
import Home from './views/1. shaired views/Home.vue'
import About from './views/1. shaired views/About.vue'
import Benefits from './views/1. shaired views/Benefits.vue'
import Helpdesk from '@/views/1. shaired views/Helpdesk.vue'
import Store from '@/views/1. shaired views/Store.vue'
//2. nonuser views
import Login from './views/2. nonuser views/Login.vue'

//3. user views
import Profile from './views/3. user views/Profile.vue'
import Schedule from './views/3. user views/Schedule.vue'

//3. edit views
import Data from './views/4. admin views/Data.vue'
import Analysis from './views/4. admin views/Analysis.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        //1. shaired views
        {
            path: '/', name: 'home', component: Home
        },
        {
            path: '/about', name: 'about', component: About
        },
        {
            path: '/benefits', name: 'benefits', component: Benefits
        },
        {
            path: '/helpdesk', name: 'helpdesk', component: Helpdesk
        },
        {
            path: '/store', name: 'store', component: Store
        },
        //2. nonuser views
        {
            path: '/login', name: 'login', component: Login
        },

        //3. user views
        {
            path: '/profile', name: 'profile', component: Profile
        },
        {
            path: '/schedule', name: 'schedule', component: Schedule
        },

        //4. admin views
        {
            path: '/data', name: 'data', component: Data
        },
        {
            path: '/analysis', name: 'analysis', component: Analysis
        },
    ]
})
