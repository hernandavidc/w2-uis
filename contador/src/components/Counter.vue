<template>
    <div>
        <h1 class="text-center">Este es el componente de Contador</h1>
        <button class="btn btn-success btn-block"
            @click="increment(1)"
        >
            Incrementar
        </button>
        <div class="alert alert-secondary text-center mt-3">
            {{ counter }}
        </div>
        <button class="btn btn-danger btn-block"
            @click="decrement(1)"
        >
            Decrementar
        </button>
    </div>    
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default{
    name: 'Counter',
    computed:{
        ...mapState(['counter'])
    },
    methods: {
        ...mapMutations(['increment', 'decrement'])
    }
}
</script>