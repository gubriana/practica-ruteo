<template>
  <div id="app" class="container">
    <div class="row right">
      <div class="col s12">
        <router-link class="btn-floating btn-large waves-effect waves-light red" v-bind:to="{path: '/' }" id="inicio"><i class="material-icons">home</i></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
//import NinjaOro from './components/NinjaOro.vue'

export default {
  name: 'App',
  props: true
  //components: {
    //NinjaOro
  //}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.0);
  margin-top: 60px;
}
</style>
