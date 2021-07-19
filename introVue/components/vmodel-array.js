Vue.component('vmodel-array', {
    data(){
        return {
            extra: []
        }
    },
    template: `
        <div>
            <h2> Elementos extra a tu pedido </h2>
            <input type="checkbox" id="papitas" value="papitas" v-model="extra" />
            <label for="papitas"> Papitas </label>

            <input type="checkbox" id="gaseosa" value="gaseosa" v-model="extra" />
            <label for="gaseosa"> Gaseosa </label>

            <input type="checkbox" id="postre" value="postre" v-model="extra" />
            <label for="postre"> Postre </label>

            <p> Tus elementos extra para el pedido son: {{ extra }} </p>
        </div>
    `
})