Vue.component('child-methods', {
    data(){
        return {
            componentName: "Metodo del child"
        }
    },
    methods: {
        showCmpValue(){
            // alert('showCmpValue: ' + this.componentName);
        }
    },
    template: `
        <div>
            <h2> Acceso a metodos del hijo desde el padre </h2>
        </div>
    `
})