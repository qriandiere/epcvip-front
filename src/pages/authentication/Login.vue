<template>
    <div class="bg-dark h-100 d-flex justify-content-around align-items-center">
        <img src="/logo.png"/>
        <b-form class="border p-5 w-50" @submit="login()">
            <b-form-group label="Enter your username">
                <b-form-input
                        v-model="user.username"
                        type="text"
                        required
                        placeholder="Enter your username"
                />
            </b-form-group>
            <b-form-group label="Enter your password">
                <b-form-input
                        v-model="user.password"
                        type="password"
                        required
                        placeholder="Enter your password"
                />
            </b-form-group>
        </b-form>
    </div>
</template>
<script>
    export default {
        name: 'authentication-login',
        data: () => ({
            user: {
                username: null,
                password: null
            }
        }),
        methods: {
            login() {

            }
        }
    }
</script>
<style scoped>

</style>
