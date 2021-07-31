<template>
    <div v-if="selectedTodo">
        <todo-form :todo="selectedTodo"
            submitText="Actualizar todo"
            @submitForm="saveTodo"
        ></todo-form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import TodoForm from '@/components/TodoForm'

export default {
    name: 'TodoUpdate',
    components: {
        TodoForm
    },
    computed: {
        ...mapState('todos', ['selectedTodo'])
    },
    methods: {
        ...mapActions('todos', ['updateTodo']),
        saveTodo(todo){
            this.updateTodo(todo).then(() => {
                this.$router.push({ name: 'todos' })
            });
        }
    }
}
</script>