Vue.component('computed-prop', {
    data(){
        return {
            nombre: 'Carlos',
            apellido: "Caballero"
        }
    },
    computed: {
        nombreCompleto(){
            return `${this.nombre} ${this.apellido}`
        }
    },
    template: `
        <div>
            <h2> Computed values </h2>
            <p> {{ nombreCompleto }} </p>
        </div>
    `
})