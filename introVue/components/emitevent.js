Vue.component('emitevent', {
    data(){
        return {
            car: 'mazda',
            valor2: 123
        }
    },
    template: `
        <div>
            <h2> Emitir eventos con Vue </h2>
            <p @click="$emit('show_car_brand', car, valor2)"> 
                Click para emitir el evento del padre 
            </p> 
        </div>
    `
})