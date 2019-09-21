import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import requireAuthGuard from './guards/requireAuthGuard'
import requireGuestGuard from './guards/requireGuestGuard'

/**
 * Application routes
 */
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/Home.vue'),
            beforeEnter: requireAuthGuard
        },
        {
            path: '/authentication/login',
            name: 'authentication-login',
            component: () => import('@/pages/authentication/Login.vue'),
            beforeEnter: requireGuestGuard
        },
    ]
})
/**
 * Error routes
 */
router.addRoutes([
    {path: '*', name: '404', redirect: {name: 'home'}}
])

export default router
