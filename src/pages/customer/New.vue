<template>
    <b-container>
        <h1>New customer</h1>
        <customer-new
                @submit="submit($event)"
        />
    </b-container>
</template>

<script>
    export default {
        name: 'customer-new',
        components: {},
        methods: {
            async submit(customer) {
                const {id} = await this.$store.dispatch('customer/new', customer)
                await this.$router.push({name: 'customer', params: {id}})
            }
        }
    }
</script>
