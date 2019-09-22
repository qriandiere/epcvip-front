<template>
    <div class="app-container">
        <b-navbar
                variant="dark"
                type="dark"
                v-if="isAuthenticated"
                class="mb-2 d-flex justify-content-between"
        >
            <b-navbar-brand href="#">
                <img
                        src="/logo.png"
                        height="25"
                        width="25"
                        alt="logo"
                        class="d-inline-block align-top"
                        @click="$router.push({name: 'home'})"
                />
            </b-navbar-brand>
            <b-btn
                    @click="logout()"
                    variant="link"
            >
                Logout
            </b-btn>
        </b-navbar>
        <router-view ref="routerView"/>
    </div>
</template>
<script>
    export default {
        name: 'app',
        components: {},
        computed: {
            isAuthenticated(){
                return this.$store.getters['user/isAuthenticated']
            }
        },
        methods: {
            logout(){
                this.$store.dispatch('user/logout')
                this.$router.push({name: 'authentication-login'})
            }
        }
    }
</script>
