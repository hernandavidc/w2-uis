<template>
    <h1>Listado de TODOS</h1>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Todos',
    mounted(){
        this.fetchTodos();
    },
    methods: {
        ...mapActions('todos', ['fetchTodos'])
    }
}
</script>