Vue.component('ciclos', {
    data(){
        return {
            prodDisp: [ 
                { id: 1, name: 'Pollito con papas'},
                { id: 2, name: 'Salchipapa'},
                { id: 3, name: 'Hamgur de quesito'},
                { id: 4, name: 'Ensaladita'},
            ]
        }
    },
    template: `
        <div>
            <h2> Bucle con v-for </h2>
            <ul>
                <li 
                    v-for="(producto, indexProd) in prodDisp"
                    :key="'prod'+indexProd"
                    class="class-list"
                > {{indexProd}} | {{ producto.name }} </li>
            </ul>
        </div>
    `
});