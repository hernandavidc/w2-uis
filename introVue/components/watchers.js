Vue.component('watchers', {
    data(){
        return {
            user: null,
            oldUser: null
        }
    },
    mounted(){
        this.userData();
    },
    methods: {
        async userData(){
            try{
                const data = await fetch('https://randomuser.me/api/');
                const json = await data.json();
                const user = json.results[0];
                this.user = `${user.name.title} ${user.name.first} ${user.name.last}`
                console.log(user);
            } catch(e){
                // Error en la petición
                console.error(e);
            }
        }
    },
    watch: {
        user(newVal, oldVal){
            this.user = newVal;
            this.oldUser = oldVal;
        }
    },
    template: `
        <div>
            <h2> Componetent watchers </h2>
            <a @click="userData"> Click para actulizar la petición a la API </a>
            <p> User new: {{ user }} </p>
            <p> User old: {{ oldUser }} </p>
        </div>
    `
})