Vue.component('vmodel', {
    data(){
        return {
            texto: "Hola mundo"
        }
    },
    template: `
        <div>
            <h2> Trajando con vmodel </h2>
            <input v-model="texto">
            <p> Nuestro texto contiene: {{ texto }} </p>
        </div>
    `
})