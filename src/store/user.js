import api from '@/utils/api'

export default {
    namespaced: true,
    state: {
        token: null
    },
    mutations: {
        token(state, token) {
            state.token = token
        }
    },
    actions: {
        async login({commit}, {username, password}) {
            const {status, data: token} = await api({
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }).post('authentication/login');
            if (status === 200) commit('token', token)
            return status
        },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token
        }
    }
}
