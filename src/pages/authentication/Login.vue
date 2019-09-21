<template>
    <div class="bg-dark h-100 d-flex justify-content-around align-items-center">
        <img src="/logo.png" alt="logo"/>
        <b-form class="border p-5 w-50" @submit.prevent="login()">
            <b-alert v-if="error" variant="danger">{{error}}</b-alert>
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
            <b-button type="submit" variant="primary" block>Login</b-button>
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
            },
            error: null
        }),
        methods: {
            async login() {
                const status = await this.$store.dispatch('user/login', this.user)
                if (status === 200) await this.$router.push({name: 'home'})
                else this.error = 'Invalid credentials. Please try again with a different username or password.'
            }
        }
    }
</script>
