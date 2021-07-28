<template>
    <b-container>
        <b-row class="mt-4">
            <b-col cols="9">
                <slot name="product-list"></slot>
            </b-col>
            <b-col cols="3">
                <slot name="cart"></slot>
            </b-col>
        </b-row>
    </b-container>
</template>