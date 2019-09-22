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
        },
        clear(state){
            state.user = null
            state.token = null
            localStorage.clear()
        }
    },
    actions: {
        async login({commit}, {username, password}) {
            const response = await api({
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }).post('authentication/login');
            if (response.status === 200) {
                commit('user', response.data.user)
                commit('token', response.data.token)
            }
            return response
        },
        logout({commit}){
            commit('clear')
        }
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token
        },
        isReviewer: state => user => user.roles.includes('ROLE_REVIEWER') || user.roles.includes('ROLE_ADMIN'),
        isAdmin: state => user => user.roles.includes('ROLE_ADMIN'),

    }
}
