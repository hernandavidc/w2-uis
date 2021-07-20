Vue.component('slots', {
    template: `
        <div>
            <h2> Ejemplo Layout </h2>
            <header>
                <slot name="header"> </slot>
                <small> Esto es mas contenido </small>
            </header>
            <main>
                <slot>  </slot>
            </main>
            <footer>
                <slot name="footer"> </slot>
            </footer>
        </div>
    `
});