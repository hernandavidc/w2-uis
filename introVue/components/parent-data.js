Vue.component('parent-data', {
    template: `
        <div>
            <h2> Acceso a datos del padre desde el hijo </h2>
            <p> El nombre de la app es: {{ $parent.appName }}</p>
        </div>
    `
})