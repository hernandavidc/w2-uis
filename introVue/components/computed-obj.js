Vue.component('computed-obj', {
    data(){
        return {
            cant: 0
        }
    },
    computed: {
        fomatearCant: {
            get: function () {
              return `$ ${ this.cant }`;
            },
            set: function (newValue) {
                console.log(newValue);
                this.cant = newValue;
            }
        }
    },
    template: `
        <div>
            <h2> Computed values con getters y setters </h2>
            <input v-model="cant" />
            <p> {{ fomatearCant }} </p>
        </div>
    `
})