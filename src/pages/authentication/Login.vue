<template>
    <div class="bg-dark h-100 d-flex justify-content-around align-items-center">
        <img src="/logo.png" alt="logo"/>
        <b-form class="w-50 login-form" @submit.prevent="login()">
            <b-alert
                    variant="danger"
                    :show="user.error !== null"
            >
                {{user.error}}
            </b-alert>
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
                password: null,
                error: null
            },
        }),
        methods: {
            async login() {
                this.user.error = null
                const response = await this.$store.dispatch('user/login', this.user)
                if (response.status === 200) await this.$router.push({name: 'home'})
                else this.user.error = response.message
            }
        }
    }
</script>
<style lang="scss">
    .login-form {
        legend {
            color: white !important;
        }
    }
</style>
