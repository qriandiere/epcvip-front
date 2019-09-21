<template>
    <b-container>
        <b-table
                :items="customers"
                primary-key="uuid"
                hover
                striped
                small
                bordered
                fixed
        />
    </b-container>
</template>

<script>
    export default {
        name: 'customer-list',
        async mounted() {
            await this.$store.dispatch('customer/list')
        },
        computed: {
            customers() {
                const customers = this.$store.state.customer.list
                return customers.map((c) => {
                    c.dateOfBirth = this.date(c.dateOfBirth)
                    c.createdAt = this.date(c.createdAt)
                    c.updatedAt = c.updatedAt === null ? '-' : date(c.updatedAt)
                    c.products = c.products.length
                    delete c.author
                    return c
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
