<template>
    <b-container v-if="customer">
        <b-card>
            <h1>{{customer.firstName}} {{customer.lastName}}</h1>
            <p>Born {{this.date(customer.dateOfBirth)}}</p>
            <b-btn
                    variant="primary"
                    v-if="isAdmin"
                    @click="$router.push({name: 'customer-edit', params:{id:customer.uuid}})"
            >
                Edit
            </b-btn>
            <b-btn
                    variant="danger"
                    v-if="isAdmin || user.id === customer.author.id"
                    @click="remove()"
            >
                Delete
            </b-btn>
            <template v-if="isReviewer">
                <b-btn
                        variant="primary"
                        v-if="customer.status === 'pending'"
                        @click="changeStatus('reviewing')"
                >
                    Review
                </b-btn>
                <template v-else-if="customer.status === 'in_review'">
                    <b-btn
                            variant="primary"
                            @click="changeStatus('approval')"
                    >
                        Approve
                    </b-btn>
                    <b-btn
                            variant="danger"
                            @click="changeStatus('disapproval')"
                    >
                        Disapprove
                    </b-btn>
                </template>
            </template>
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
        data: () => ({}),
        computed: {
            customer() {
                return this.$store.state.customer.customer
            },
            products() {
                return this.customer.products
            },
            user() {
                return this.$store.state.user.user
            },
            isReviewer() {
                return this.$store.getters['user/isReviewer'](this.user)
            },
            isAdmin() {
                return this.$store.getters['user/isAdmin'](this.user)
            }
        },
        methods: {
            date(date) {
                date = new Date(date.date)
                return `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
            },
            async changeStatus(transition) {
                await this.$store.dispatch('customer/status', {id: this.customer.uuid, transition})
                await this.$store.dispatch('customer/get', this.$route.params.id)
            },
            async remove() {
                await this.$store.dispatch('customer/delete', this.customer.uuid)
                await this.$router.push({name: 'customers'})
            }
        }
    }
</script>
