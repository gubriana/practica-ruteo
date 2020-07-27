<template>
  <div class="container">
     <div class="row">
      <div class="col s12">
        <h3>Acerca de  {{ $route.params.restoran }}</h3>
        <br>
        <div class="row right">
          <div class="col s4">
            <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/vampi-pasta.jpg" alt="">
          </div>
          <div class="col s8 right">
            <p class="right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque, quia vero enim cum reprehenderit corrupti totam possimus quo nisi veritatis unde corporis? Soluta ab accusantium rem. Architecto, deserunt non.</p>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col s4">
            <img src="https://www.piccolafesta.com/wp-content/uploads/2019/10/Comida-divertida-de-Haloween.png" alt="">
          </div>
          <div class="col s8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque, quia vero enim cum reprehenderit corrupti totam possimus quo nisi veritatis unde corporis? Soluta ab accusantium rem. Architecto, deserunt non.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: justify;
}
</style>
