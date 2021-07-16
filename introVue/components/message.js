Vue.component('message', {
    data(){
        return{
            message: "Hola pepito"
        }
    },
    template: `
        <div>
            <p>{{ message }}</p>
        </div>
    `
})