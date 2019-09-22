<template>
    <b-container>
        <h1>Edit existing customer</h1>
        <b-alert
                :show="error"
                variant="danger"
        >
            {{error}}
        </b-alert>
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
        data: () => ({
            error: null
        }),
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
                const response = await this.$store.dispatch('customer/edit', customer)
                if (response.status === 200) await this.$router.push({name: 'customer', params: {id: response.id}})
                else this.error = response.message
            }
        }
    }
</script>
