<template>
    <b-container v-if="customer">
        <b-card>
            <h1>{{customer.firstName}} {{customer.lastName}}</h1>
            <p>Born {{this.date(customer.dateOfBirth)}}</p>
            <h5>Products</h5>
            <b-table
                    :items="products"
                    primary-key="issn"
                    hover
                    striped
                    small
                    bordered
                    fixed
            />
        </b-card>
    </b-container>
</template>

<script>
    export default {
        name: 'customer-view',
        async mounted() {
            await this.$store.dispatch('customer/get', this.$route.params.id)
        },
        computed: {
            customer() {
                return this.$store.state.customer.customer
            },
            products() {
                return this.customer.products.map((p) => {
                    delete p.author
                    p.modifiedAt = p.modifiedAt ? this.date(p.modifiedAt) : '-'
                    p.createdAt = this.date(p.createdAt)
                    return p
                })
            }
        },
        methods: {
            date(date) {
                date = new Date(date.date)
                return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
            }
        }
    }
</script>
