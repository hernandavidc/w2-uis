Vue.component('methods', {
    data(){
        return {
            nombre: 'David',
            apellido: "Sanchez"
        }
    },
    computed: {
        nombreCompleto(){
            return `${this.nombre} ${this.apellido}`
        }
    },
    methods:{
        saludar(){
            alert("Hola " + this.nombreCompleto);
        }
    },
    template: `
        <div>
            <h2> Metodo de saludar </h2>
            <p @click="saludar"> Click me </p>
        </div>
    `
})