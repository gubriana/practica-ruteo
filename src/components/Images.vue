<template>
  <div class="container">
     <div class="row">
      <div class="col s12">
        <h3>Fotos de  {{ restoran }}</h3>
        <br>
          <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XmUA-nQziHK-BDXOBXgfbUkuxniVeXSfQakEq0-0cWzIS3M&s"></a>
            <a class="carousel-item" href="#two!"><img src="https://img.vixdata.io/pd/webp-large/es/sites/default/files/c/comida-divertida-ninos-12.jpg"></a>
            <a class="carousel-item" href="#three!"><img src="https://mariateresabarahona.com/es/wp-content/uploads/2014/11/comida-ni%C3%B1os-700x468.jpg"></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'

export default {
  name: 'Images',
  props: {
    restoran: String,
  },
  mounted: function() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item {
    visibility: hidden;
    width: 500px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
