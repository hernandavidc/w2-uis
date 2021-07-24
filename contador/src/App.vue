<template>
  <div id="app">
    <img alt="Vue logo" style="margin: 0 auto;" src="./assets/logo.png">
    <p> {{ mensaje }} </p>
    <div class="container">
      <div class="row">
        <div class="col col-6">
          <counter></counter>
        </div>
        <div class="col col-6">
          <result></result>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import result from '@/components/showResult'

export default {
  name: 'App',
  data(){
    return {
      mensaje: "Este es mi componente app"
    }
  },
  components: {
    Counter, result
  }
}
</script>