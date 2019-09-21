<template>
    <b-container>
        <h1>New customer</h1>
        <b-form @submit="submit()">
            <b-form-group
                    label="First name"
            >
                <b-form-input
                        v-model="customer.firstName"
                        type="string"
                        required
                        placeholder="Enter customer first name"
                        min="2"
                        max="32"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                    label="Last name"
            >
                <b-form-input
                        v-model="customer.lastName"
                        type="string"
                        required
                        placeholder="Enter customer last name"
                        min="2"
                        max="32"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                    label="Date of birth"
            >
                <b-form-input
                        v-model="customer.dateOfBirth"
                        type="date"
                        required
                        placeholder="Enter customer date of birth"
                ></b-form-input>
            </b-form-group>
            <b-btn
                    variant="primary"
                    type="submit"
                    block
            >
                Create
            </b-btn>
        </b-form>
    </b-container>
</template>

<script>
    export default {
        name: 'customer-new',
        data: () => ({
            customer: {
                firstName: null,
                lastName: null,
                dateOfBirth: null,
                products: []
            }
        }),
        methods: {
            submit() {

            }
        }
    }
</script>
