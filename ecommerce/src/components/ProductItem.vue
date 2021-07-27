<template>
    <b-card
        :title="product.name"
        :img-src="product.picture"
        :img-alt="product.name"
        img-top
        class="mb-2"
    >
        <p class="muted"> COP. ${{ product.price }} </p>
        <b-button
            block
            variant="warning"
            @click="$emit('addToCart', product)"
        > Agregar al carrito </b-button>
    </b-card>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>