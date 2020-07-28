<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link v-bind:to="{ name: 'about' }">About</router-link></li>
        <li><router-link v-bind:to="{ name: 'reviews' }">Reviews</router-link></li>
        <li><router-link v-bind:to="{ name: 'images' }">Photo</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Restoran',
  props: {
    restoran: String,
  }
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
