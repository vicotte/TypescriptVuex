<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <HelloWorld2 msg="2nd message" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import HelloWorld2 from './components/HelloWorld2.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld,
      HelloWorld2,
    },
  })
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
