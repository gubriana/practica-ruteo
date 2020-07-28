<template>
  <div class="container">
     <div class="row">
      <div class="col s12">
        <h3>Bienvenidos COMIDA SIN SENTIDO</h3>
        <img class="materialboxed" src="https://www.diariamenteali.com/medias/114-Comida-divertida-para-tus-hijos.jpg?context=bWFzdGVyfGltYWdlc3wxNjUyNDR8aW1hZ2UvanBlZ3xoZWIvaDQ0Lzg3OTk1NDI1NzUxMzQvMTE0LS0tQ29taWRhLWRpdmVydGlkYS1wYXJhLXR1cy1oaWpvcy5qcGd8MjQyZDVmOWYxMGM3YmUwNzc2YmU4MmI5MWU1MjZhYjg3YTJiZDFhN2I2NzJjYjUyODJjYzA0MGI2ODNjOTA2Yw" alt="">
        <ul>
          <li>Japonesa</li>
          <li>Italiana</li>
          <li>India</li>
          <li>Mexicana</li>
          <li>Mapuche</li>
          <li>China</li>
          <li>Peruana</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'Inicio',
  mounted: function() {
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  font-weight: bolder;
  margin-top: 60px;
}
img {
  width: 100%;
}

li {
  display: inline-block;
  margin: 0 10px;
}
h3 {
  color:#ffffff;
  font-weight: bolder;
}
</style>