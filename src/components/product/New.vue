<template>
    <b-form @submit="submit()">
        <b-form-group
                label="First name"
        >
            <b-form-input
                    v-model="product.issn"
                    type="string"
                    required
                    placeholder="Enter product issn"
                    min="13"
                    max="13"
            ></b-form-input>
        </b-form-group>
        <b-form-group
                label="Last name"
        >
            <b-form-input
                    v-model="product.name"
                    type="string"
                    required
                    placeholder="Enter product name"
                    max="255"
            ></b-form-input>
        </b-form-group>
        <b-btn
                variant="primary"
                type="submit"
                block
        >
            Add
        </b-btn>
    </b-form>
</template>

<script>
    export default {
        name: 'product-new',
        props: {
            index: Number
        },
        data: () => ({
            product: {
                issn: null,
                name: null
            }
        }),
        methods: {
            submit() {
                this.$emit('add_product', {index: this.index, product: this.product})
            }
        }
    }
</script>
