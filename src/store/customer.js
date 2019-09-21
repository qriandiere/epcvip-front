import api from '@/utils/api'

export default {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        customers(state, customers) {
            state.list = JSON.parse(customers)
        }
    },
    actions: {
        async list({commit}) {
            const {status, data: customers} = await api().get('customers')
            commit('customers', customers)
            return status
        },
        async new({commit}, customer){
            const body = JSON.stringify(customer)
            const {status, data: id} = await api().post('customer', body)
            console.log(status, id)
        }
    },
    getters: {}
}
