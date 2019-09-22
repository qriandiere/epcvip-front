<template>
    <b-container>
        <h1>New customer</h1>
        <customer-form
                @submit="submit($event)"
        />
    </b-container>
</template>

<script>
    import CustomerForm from "../../components/customer/Form";
    export default {
        name: 'customer-new',
        components: {CustomerForm},
        methods: {
            async submit(customer) {
                const {id} = await this.$store.dispatch('customer/new', customer)
                await this.$router.push({name: 'customer', params: {id}})
            }
        }
    }
</script>
