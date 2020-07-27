<template>
  <div class="container">
     <div class="row">
      <div class="col s12">
        <h3>Login de COMIDA SIN SENTIDO</h3>
        <br>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="nombre de usuario" id="nombre" type="text" class="validate">
                    <label for="nombre"></label>
                </div>
                <div class="input-field col s6">
                    <input placeholder="contraseña" id="password" type="password" class="validate">
                    <label for="password"></label>
                </div>
                <br>
                <div class="col s12">
                    <a class="waves-effect waves-light btn-large"><i class="material-icons right">send</i>button</a>
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'Login',
    }
</script>