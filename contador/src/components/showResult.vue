<template>
    <p class="text-center"> {{ $store.state.counter + 19 }} </p>
</template>
<script>
export default {
    created(){
        console.log(this);
    }
}
</script>