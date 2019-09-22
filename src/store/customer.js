import api from '@/utils/api'

function date(date) {
    date = new Date(date.date)
    return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
}

export default {
    namespaced: true,
    state: {
        list: [],
        customer: null
    },
    mutations: {
        customer(state, customer) {
            state.customer = JSON.parse(customer)
            state.customer.products = state.customer.products.map((p)=>{
                delete p.author
                p.modifiedAt = p.modifiedAt ? date(p.modifiedAt) : '-'
                p.createdAt = date(p.createdAt)
                return p
            })
        },
        customers(state, customers) {
            state.list = JSON.parse(customers).map((c) => {
                c.dateOfBirth = date(c.dateOfBirth)
                c.createdAt = date(c.createdAt)
                c.updatedAt = c.updatedAt === null ? '-' : date(c.updatedAt)
                c.products = c.products.length
                delete c.author
                return c
            })
        }
    },
    actions: {
        async get({commit}, id) {
            const {status, data: customer} = await api().get(`customer/${id}`)
            commit('customer', customer)
            return status
        },
        async edit({commit}, customer) {
            const {status} = await api().put(`customer/${customer.uuid}`, customer)
            return {status, id: customer.uuid}
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
