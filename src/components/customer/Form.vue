<template>
    <b-form @submit.prevent="submit()">
        <b-form-group
                label="First name"
        >
            <b-form-input
                    v-model="customer.firstName"
                    type="text"
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
                    type="text"
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
        <div>
            <product-new
                    v-for="(product, index) of customer.products"
                    :key="`customer-products-${index}`"
                    :data="data ? customer.products[index] : null"
                    @change="customer.products[index] = $event"
                    @remove="removeProduct(index)"
            />
        </div>
        <b-btn
                variant="secondary"
                type="button"
                @click="customer.products.push({})"
                class="my-2"
        >
            Add a product
        </b-btn>
        <b-btn
                variant="primary"
                type="submit"
                block
        >
            <template v-if="!data">Create</template>
            <template v-else>Save changes</template>
        </b-btn>
    </b-form>
</template>

<script>
    import ProductNew from "../product/Form";

    export default {
        name: 'customer-form',
        components: {ProductNew},
        props: {
            data: {
                type: Object,
                default: null
            }
        },
        mounted() {
            if (this.data) {
                this.customer.uuid = this.data.uuid
                this.customer.firstName = this.data.firstName
                this.customer.lastName = this.data.lastName
                this.customer.dateOfBirth = this.date(this.data.dateOfBirth)
                this.data.products.forEach((p) => {
                    this.customer.products.push({
                        issn: p.issn,
                        name: p.name
                    })
                })
            }
        },
        data: () => ({
            customer: {
                firstName: null,
                lastName: null,
                dateOfBirth: null,
                products: [],
            }
        }),
        methods: {
            removeProduct(index) {
                this.customer.products = this.customer.products.filter((p, i) => {
                    return i !== index
                })
            },
            date(date) {
                date = new Date(date.date)
                return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
            },
            submit() {
                this.$emit('submit', this.customer)
            }
        }
    }
</script>
