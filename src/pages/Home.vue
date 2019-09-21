<template>
    <b-container>
        <b-jumbotron header="EPCVIP Admin" :lead="`Welcome, ${user.username}`">
            <p>You can start your day by checking on your customers</p>
            <b-button
                    @click="$router.push({name:'customers'})"
                    variant="primary"
            >
                Check on my customer
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
