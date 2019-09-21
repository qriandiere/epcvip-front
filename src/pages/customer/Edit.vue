<template>
    <b-container>
        <h1>New customer</h1>
        <customer-new
                v-if="customer"
                @submit="submit($event)"
                :data="customer"
        />
    </b-container>
</template>

<script>
    import CustomerNew from "../../components/customer/New";
    export default {
        name: 'customer-edit',
        components: {CustomerNew},
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
