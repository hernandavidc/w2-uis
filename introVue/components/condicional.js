Vue.component('condicional', {
    data(){
        return{
            edad: 10
        }
    },
    template: `
        <div>
            <h2> Condicionales ( v-if ) </h2>
            <input v-model="edad" />
            <p v-show="edad < 18" > Menor de edad </p>
            <p v-show="edad >= 18 && edad < 30"> 
                Mayor de edad pero menor de 30 
            </p>
            <p v-show="edad >= 30 && edad < 65"> 
                Tiene mas de 30 años pero menos de 65
            </p>
            <p v-show="edad >= 65"> Esta pensionado </p>
        </div>
    `
})