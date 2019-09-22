<template>
    <b-container>
        <h1>Customers</h1>
        <b-table
                :items="customers"
                primary-key="uuid"
                hover
                striped
                small
                bordered
                fixed
                responsive="sm"
                @row-clicked="$router.push({name: 'customer',  params:{id: $event.uuid}})"
        />
        <b-btn
                @click="$router.push({name: 'customer-new'})"
                variant="primary"
        >
            Add a customer
        </b-btn>
    </b-container>
</template>

<script>
    export default {
        name: 'customer-list',
        async mounted() {
            await this.$store.dispatch('customer/list')
        },
        data: () => ({}),
        computed: {
            customers() {
                return this.$store.state.customer.list
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
