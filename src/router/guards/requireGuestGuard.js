import $store from '@/store'

export default (to, from, next) => $store.getters['user/isAuthenticated'] ? next({ name: 'home' }) : next()
