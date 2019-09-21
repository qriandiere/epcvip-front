import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
import './assets/app.scss'
Vue.use(BootstrapVue)
Vue.config.productionTip = false
store.commit('user/restore')

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
