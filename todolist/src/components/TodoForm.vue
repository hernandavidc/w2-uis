<template>
    <b-form @submit.prevent="$emit('submitForm', todo)">
        <b-form-group id="todo-create"
            label="Todo"
            label-for="todo"
        >
            <b-form-input autocomplete="off"
                id="todo"
                v-model="todo.text"
                :state="!$v.todo.text.$invalid"
                placehold="Introduce la tarea"
                @input="$v.todo.$touch"
            ></b-form-input>
            <b-form-invalid-feedback id="todoInfo" v-if="$v.todo.$dirty">
                Este campo requiere revisar
            </b-form-invalid-feedback>
        </b-form-group>  

        <b-button type="submit"
            variant="primary"
            :disable="$v.todo.$invalid"
        >
            {{ submitText }}
        </b-button>      
    </b-form>
</template>

<script>
import { validationMixin } from 'vuelidate'
const { required, minLength } = require('vuelidate/lib/validators')

export default {
    name: 'TodoForm',
    mixins: [validationMixin],
    props:{
        todo: {
            type: Object,
            required: true
        },
        submitText: {
            type: String,
            default: 'Crear todo'
        }
    },
    validations: {
        todo: {
            text: {
                required, minLength: minLength(4)
            }
        }
    }
}
</script>