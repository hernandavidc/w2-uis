Vue.component('child-data', {
    data(){
        return {
            componentName: "NombreHijo"
        }
    },
    template: `
        <div>
            <h2> Acceso a datos del hijo desde el padre </h2>
        </div>
    `
})