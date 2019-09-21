<template>
    <b-form
            class="border p-2 my-2"
    >
        <b-form-group
                label="Issn"
        >
            <b-form-input
                    v-model="product.issn"
                    type="text"
                    required
                    placeholder="Enter product issn"
                    min="13"
                    max="13"
                    @input="change()"
            ></b-form-input>
        </b-form-group>
        <b-form-group
                label="Product name"
        >
            <b-form-input
                    v-model="product.name"
                    type="text"
                    required
                    placeholder="Enter product name"
                    max="255"
                    @input="change()"
            ></b-form-input>
        </b-form-group>
    </b-form>
</template>

<script>
    export default {
        name: 'product-new',
        props: {
            data: {
                type: Object,
                default: null
            }
        },
        data: () => ({
            product: {
                issn: 'issn-',
                name: null
            }
        }),
        mounted(){
            if (this.data) this.product = this.data
        },
        methods: {
            change(){
                this.$emit('change', this.product)
            }
        }
    }
</script>
