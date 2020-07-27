<template>
  <div class="container">
     <div class="row">
      <div class="col s12">
        <h3>Acerca de  {{ $route.params.restoran }}</h3>
        <br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque, quia vero enim cum reprehenderit corrupti totam possimus quo nisi veritatis unde corporis? Soluta ab accusantium rem. Architecto, deserunt non.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
