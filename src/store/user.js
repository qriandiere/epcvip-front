import api from '@/utils/api'
import {LOCALSTORAGE_TOKEN, LOCALSTORAGE_USER} from "../utils/constants";

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    mutations: {
        token(state, token) {
            state.token = token
            localStorage.setItem(LOCALSTORAGE_TOKEN, token)
        },
        user(state, user) {
            state.user = JSON.parse(user)
            localStorage.setItem(LOCALSTORAGE_USER, user)
        },
        restore(state){
            state.user = JSON.parse(localStorage.getItem(LOCALSTORAGE_USER))
            state.token = localStorage.getItem(LOCALSTORAGE_TOKEN)
        }
    },
    actions: {
        async login({commit}, {username, password}) {
            const {status, data: {user, token}} = await api({
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }).post('authentication/login');
            if (status === 200) {
                commit('user', user)
                commit('token', token)
            }
            return status
        },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token
        }
    }
}
