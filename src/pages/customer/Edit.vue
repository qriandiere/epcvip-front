<template>
    <b-container>
        <h1>New customer</h1>
        <customer-form
                v-if="customer"
                @submit="submit($event)"
                :data="customer"
        />
    </b-container>
</template>

<script>
    import CustomerForm from "../../components/customer/Form";
    export default {
        name: 'customer-edit',
        components: {CustomerForm},
        async mounted() {
            await this.$store.dispatch('customer/get', this.$route.params.id)
        },
        computed: {
            customer() {
                return this.$store.state.customer.customer
            }
        },
        methods: {
            async submit(customer) {
                const {id} = await this.$store.dispatch('customer/edit', customer)
                await this.$router.push({name: 'customer', params: {id}})
            }
        }
    }
</script>
