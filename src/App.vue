<template>
    <div class="app-container">
        <b-navbar
                variant="dark"
                type="dark"
                v-if="isAuthenticated"
                class="mb-2"
        >
            <b-navbar-brand href="#">
                <img src="/logo.png" height="25" width="25" alt="logo" class="d-inline-block align-top">
            </b-navbar-brand>
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
        }
    }
</script>
