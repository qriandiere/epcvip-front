import api from '@/utils/api'

export default {
    namespaced: true,
    state: {
        list: [],
        customer: null
    },
    mutations: {
        customer(state, customer) {
            state.customer = JSON.parse(customer)
        },
        customers(state, customers) {
            state.list = JSON.parse(customers)
        }
    },
    actions: {
        async get({commit}, id) {
            const {status, data: customer} = await api().get(`customer/${id}`)
            commit('customer', customer)
            return status
        },
        async list({commit}) {
            const {status, data: customers} = await api().get('customers')
            commit('customers', customers)
            return status
        },
        async new({commit}, customer) {
            const body = JSON.stringify(customer)
            const {status, data: id} = await api().post('customer', body)
            return {id, status}
        },
        async status({commit}, {id, transition}) {
            const {status} = await api().post(`customer/${id}/status?transition=${transition}`)
            return {status}
        },
        async delete({commit}, id) {
            const {status} = await api().delete(`customer/${id}`)
            return status
        }
    },
    getters: {}
}
