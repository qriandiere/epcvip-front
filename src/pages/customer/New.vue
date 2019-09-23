<template>
    <b-container>
        <h1>New customer</h1>
        <b-alert
                :show="error"
                variant="danger"
        >
            {{error}}
        </b-alert>
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
        data: () => ({
            error: null
        }),
        methods: {
            async submit(customer) {
                const response = await this.$store.dispatch('customer/new', customer)
                if (response.status === 200) await this.$router.push({name: 'customer', params: {id: response.data}})
                else this.error = response.message
            }
        }
    }
</script>
