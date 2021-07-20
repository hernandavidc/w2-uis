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
            const data = await fetch('https://randomuser.me/api/');
            const json = await data.json();
            console.log(json);
        }
    },
    template: `
        <div>
            <h2> Componetent watchers </h2>
        </div>
    `
})