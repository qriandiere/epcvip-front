import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import user from './user'
import customer from './customer'

export default new Vuex.Store({
    modules: {
        user,
        customer,
    },
    strict: process.env.NODE_ENV !== 'production'
})
