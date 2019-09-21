import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import user from './user'
import product from './product'
import customer from './customer'
import notification from './notification'

export default new Vuex.Store({
    modules: {
        user,
        product,
        customer,
        notification
    },
    strict: process.env.NODE_ENV !== 'production'
})
