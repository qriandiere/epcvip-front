<template>
    <b-container>
        <b-jumbotron header="EPCVIP Admin" :lead="`Welcome, ${user.username}`">
            <p>You can start your day by checking on your customers, or you can add a new customer</p>
            <b-button
                    @click="$router.push({name:'customers'})"
                    variant="primary"
                    class="mx-1"
            >
                Check on my customer
            </b-button>
            <b-button
                    @click="$router.push({name:'customer-new'})"
                    variant="primary"
                    class="mx-1"
            >
                Add a new customer
            </b-button>
        </b-jumbotron>
    </b-container>
</template>

<script>
    export default {
        name: 'home',
        mounted() {
        },
        computed: {
            user() {
                return this.$store.state.user.user
            }
        }
    }
</script>
